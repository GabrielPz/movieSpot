import { AxiosError } from "axios";

export interface UserDTO {
  username: string;
}

type RawError = {
  RequestId: string;
  status: number;
  error: string;
};

export type ApiError = AxiosError<RawError>;

export type Movie = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  duration: number;
  releaseDate: string;
  minimumAge: number;
  rentPrice: number;
  category: Array<string>;
  trailerUrl: string;
  imageUrl: string;
  director: string;
  actors: string[];
  producers: string;
  studio: string;
  contentClassification: string;
  subtitles: string;
  audioLanguages: string;
  rating?: number;
};

export type Movies = Array<Movie>;
