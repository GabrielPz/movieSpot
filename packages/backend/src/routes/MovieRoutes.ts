import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { movieController } from "../controllers/MovieController";
import { z } from "zod";
import { movieSchema } from "../schemas/MovieSchemas";
import { autenticarToken, checkRole } from "./AuthRoutes";

export async function movieRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/movies",
    {
      preHandler: [autenticarToken, checkRole(["ADMIN"])],
      schema: {
        summary: "Create Movie",
        tags: ["Movies"],
        body: movieSchema,
        response: {
          201: movieSchema.extend({ id: z.string().uuid() }),
          400: z.object({ message: z.string() }),
        },
      },
    },
    movieController.createMovie
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/movies/:id",
    {
      schema: {
        summary: "Get Movie by ID",
        tags: ["Movies"],
        params: z.object({ id: z.string().uuid() }),
        response: {
          200: movieSchema.extend({ id: z.string().uuid() }),
          404: z.object({ message: z.string() }),
        },
      },
    },
    movieController.getMovieById
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/movies",
    {
      schema: {
        summary: "Get All Movies",
        tags: ["Movies"],
        response: {
          200: z.array(movieSchema.extend({ id: z.string().uuid() })),
        },
      },
    },
    movieController.getAllMovies
  );

  app.withTypeProvider<ZodTypeProvider>().put(
    "/movies/:id",
    {
      preHandler: [autenticarToken, checkRole(["ADMIN"])],
      schema: {
        summary: "Update Movie by ID",
        tags: ["Movies"],
        params: z.object({ id: z.string().uuid() }),
        body: movieSchema.partial(),
        response: {
          200: movieSchema.extend({ id: z.string().uuid() }),
          404: z.object({ message: z.string() }),
        },
      },
    },
    movieController.updateMovie
  );

  app.withTypeProvider<ZodTypeProvider>().delete(
    "/movies/:id",
    {
      preHandler: [autenticarToken, checkRole(["ADMIN"])],
      schema: {
        summary: "Delete Movie by ID",
        tags: ["Movies"],
        params: z.object({ id: z.string().uuid() }),
        response: {
          204: z.null(),
          404: z.object({ message: z.string() }),
        },
      },
    },
    movieController.deleteMovie
  );
}
