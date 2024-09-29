import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { rentedMovieController } from "../controllers/RentedMovieControllers";
import { rentedMovieSchema } from "../schemas/RentedMovieSchemas";
import { authController } from "../controllers/AuthControllers";
import { z } from "zod";

export async function rentedMovieRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/rented-movies",
    {
      preHandler: [authController.autenticarToken],
      schema: {
        summary: "Add Rented Movie",
        tags: ["RentedMovies"],
        body: rentedMovieSchema,
        response: {
          201: rentedMovieSchema.extend({ id: z.string().uuid() }),
          400: z.object({ message: z.string() }),
        },
      },
    },
    rentedMovieController.addRentedMovie
  );
}
