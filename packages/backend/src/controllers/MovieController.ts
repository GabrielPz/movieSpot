import { FastifyReply, FastifyRequest } from "fastify";
import { movieService } from "../services/MovieServices";
import { movieSchema } from "../schemas/MovieSchemas";

export const movieController = {
  async createMovie(request: FastifyRequest, reply: FastifyReply) {
    const movieData = movieSchema.parse(request.body);
    const movie = await movieService.createMovie(movieData);
    return reply.status(201).send(movie);
  },

  async getMovieById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const movie = await movieService.getMovieById(id);
    if (!movie) {
      return reply.status(404).send({ message: "Movie not found" });
    }
    return reply.status(200).send(movie);
  },

  async getAllMovies(request: FastifyRequest, reply: FastifyReply) {
    const movies = await movieService.getAllMovies();
    return reply.status(200).send(movies);
  },

  async updateMovie(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const movieData = movieSchema.partial().parse(request.body);
    const movie = await movieService.updateMovie(id, movieData);
    return reply.status(200).send(movie);
  },

  async deleteMovie(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    await movieService.deleteMovie(id);
    return reply.status(204).send();
  },
};
