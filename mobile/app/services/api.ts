import axios from "axios";

const baseURL = process.env.BASE_URL;

console.log(baseURL);

const api = axios.create({
  baseURL,
});

export { api };
