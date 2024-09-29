import { prisma } from "../lib/prisma";
import { RentedMovieDTO } from "../schemas/RentedMovieSchemas";

export const rentedMovieService = {
  async addRentedMovie(data: RentedMovieDTO) {
    return prisma.rentedMovie.create({
      data,
    });
  },
};
