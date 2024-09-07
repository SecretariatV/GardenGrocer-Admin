import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.BACKEND_ENDPOINT}`,
});

const axiosPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.post(url, config?.data, config);

  return res.data;
};

const axiosGet = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

export { axiosPost, axiosGet };
