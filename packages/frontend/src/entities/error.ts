import { AxiosError } from "axios";

type RawError = {
  message: string;
};

export type DefaultErrorType = AxiosError<RawError>;
