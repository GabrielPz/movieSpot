import { FastifyReply, FastifyRequest } from "fastify";
import { rentedMovieService } from "../services/RentedMovieServices";
import { rentedMovieSchema } from "../schemas/RentedMovieSchemas";

export const rentedMovieController = {
  async addRentedMovie(request: FastifyRequest, reply: FastifyReply) {
    const rentedMovieData = rentedMovieSchema.parse(request.body);
    const rentedMovie = await rentedMovieService.addRentedMovie(
      rentedMovieData
    );
    return reply.status(201).send(rentedMovie);
  },
};
