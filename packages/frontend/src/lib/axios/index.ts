import axios from "axios";
import { setupInterceptors } from "./interceptors/index";

export const apiMovieStopV1 = axios.create({});
setupInterceptors(apiMovieStopV1);
