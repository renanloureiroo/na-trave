import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (key: string, value: any) => {
  try {
    const valueFormatted = JSON.stringify(value);

    await AsyncStorage.setItem(key, valueFormatted);
  } catch (err) {
    console.log(err);
  }
};

const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);

    const dataFormatted = JSON.parse(data);

    return data ? dataFormatted : null;
  } catch (err) {
    console.log(err);
  }
};

const clear = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {}
};

export const useAsyncStorage = () => {
  return {
    setData,
    getData,
    clear,
  };
};
