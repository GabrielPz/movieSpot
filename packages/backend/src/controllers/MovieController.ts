import { FastifyReply, FastifyRequest } from "fastify";
import { movieService } from "../services/MovieServices";
import { movieSchema } from "../schemas/MovieSchemas";

export const movieController = {
  async createMovie(request: FastifyRequest, reply: FastifyReply) {
    const movieData = movieSchema.parse(request.body);
    try {
      const movie = await movieService.createMovie(movieData);
      return reply.status(201).send(movie);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  },

  async getMovieById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const rqBody = (request as any).usuario;
    const userId = rqBody?.id || null;

    const movie = await movieService.getMovieById(id, userId);
    if (!movie) {
      return reply.status(404).send({ message: "Filme não encontrado" });
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
    try {
      const movie = await movieService.updateMovie(id, movieData);
      return reply.status(200).send(movie);
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  },

  async deleteMovie(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    try {
      await movieService.deleteMovie(id);
      return reply.status(204).send();
    } catch (error: any) {
      return reply.status(400).send({ message: error.message });
    }
  },
};
