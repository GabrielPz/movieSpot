import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

type ResultProps = {
  message?: string;
};
export const axiosDefaultCatch = (error: unknown) => {
  let result: ResultProps = {};
  console.log(error);
  if (axios.isAxiosError(error) && error.response?.data) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    result = error.response.data;
  } else {
    result;
  }
  return result;
};

export const handleUnauthorizedAccess = (error: AxiosError) => {
  const status = error.response?.status;
  if (status === 401 || status === 403) {
    Promise.reject(error);
    toast.error("Você não possui permissão para acessar essa página");
    // setTimeout(() => {
    //   window.location.href = "/home";
    // }, 5000);
  }
};
