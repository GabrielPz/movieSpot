import {
  axiosDefaultCatch,
  handleUnauthorizedAccess,
} from "@/utils/api-handle-errors";
import { getStorageValue } from "@/utils/local-storage";
import {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { headers } = config;
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  config.baseURL =
    localStorage.getItem("BASE_URL") ||
    process.env.BASE_URL ||
    "http://localhost:8000";

  if (getStorageValue("userData", {})?.token) {
    headers.Authorization = `Authorization ${
      getStorageValue("userData", {})?.token
    }`;
  }
  return { ...config, headers };
};

const onRequestError = (error: AxiosError) => {
  handleUnauthorizedAccess(error);
  const result = axiosDefaultCatch(error);
  return Promise.reject(result);
};

const onResponse = (response: AxiosResponse) => response;
const onResponseError = (error: AxiosError) => {
  handleUnauthorizedAccess(error);
  const result = axiosDefaultCatch(error);
  return Promise.reject(result);
};

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
};
