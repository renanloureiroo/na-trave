import AsyncStorage from "@react-native-async-storage/async-storage";
import { Credentials } from "../contexts/AuthContext/AuthContext.props";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const baseURL = process.env.BASE_URL;

console.log(baseURL);
interface AxiosConfig extends AxiosRequestConfig {
  _retry: boolean;
}

const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  async (response) => {
    return response;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosConfig;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const credentials = await AsyncStorage.getItem("naTrave:credentials");
      const { accessToken, refreshToken } = JSON.parse(credentials);

      try {
        const { data } = await api.post("/users/refreshToken", {
          refreshToken,
        });

        await AsyncStorage.setItem("naTrave:credentials", JSON.stringify(data));

        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;

        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export { api };
