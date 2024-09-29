import { prisma } from "../lib/prisma";
import { Movie } from "@prisma/client";
import { GetMovieDTO, MovieDTO } from "../schemas/MovieSchemas";

export const movieService = {
  async createMovie(data: MovieDTO): Promise<Movie> {
    return prisma.movie.create({ data });
  },

  async getMovieById(id: string, userId: string): Promise<GetMovieDTO | null> {
    let rentedByActualUser = null;
    if (userId) {
      rentedByActualUser = await prisma.rentedMovie.findFirst({
        where: {
          userId: userId,
          movieId: id,
        },
      });
    }
    const movie = await prisma.movie.findUnique({
      where: { id },
    });
    if (!movie) return null;
    return {
      ...movie,
      rentedByCurrentUser: !!rentedByActualUser,
    };
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
