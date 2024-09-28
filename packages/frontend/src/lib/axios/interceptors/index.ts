import { handleUnauthorizedAccess } from "@/utils/api-handle-errors";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/local-storage";
import {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { headers } = config;
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  config.baseURL =
    localStorage.getItem("BASE_URL") || process.env.BASE_URL || "";

  if (getLocalStorageItem("tokenInfo")?.data?.token) {
    headers.Authorization = `Bearer ${
      getLocalStorageItem("tokenInfo")?.data.token
    }`;
  }
  return { ...config, headers };
};

const onRequestError = (error: AxiosError) => {
  handleUnauthorizedAccess(error);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => response;
const onResponseError = (error: AxiosError) => {
  handleUnauthorizedAccess(error);
  return Promise.reject(error);
};

export const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);
};
