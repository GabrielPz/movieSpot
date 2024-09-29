import { prisma } from "../lib/prisma";
import { Movie } from "@prisma/client";
import { MovieDTO } from "../schemas/MovieSchemas";

export const movieService = {
  async createMovie(data: MovieDTO): Promise<Movie> {
    return prisma.movie.create({ data });
  },

  async getMovieById(id: string): Promise<Movie | null> {
    return prisma.movie.findUnique({
      where: { id },
    });
  },

  async getAllMovies(): Promise<Movie[]> {
    return prisma.movie.findMany();
  },

  async updateMovie(id: string, data: Partial<MovieDTO>): Promise<Movie> {
    return prisma.movie.update({
      where: { id },
      data,
    });
  },

  async deleteMovie(id: string): Promise<Movie> {
    return prisma.movie.delete({
      where: { id },
    });
  },
};
