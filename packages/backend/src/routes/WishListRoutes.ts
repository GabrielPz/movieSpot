import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { wishListController } from "../controllers/WishListControllers";
import { wishListSchema } from "../schemas/WishListSchemas";
import { authController } from "../controllers/AuthControllers";
import { z } from "zod";

export async function wishListRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/wish-list",
    {
      preHandler: [authController.autenticarToken],
      schema: {
        summary: "Add to Wish List",
        tags: ["WishList"],
        body: wishListSchema,
        response: {
          201: wishListSchema.extend({ id: z.string().uuid() }),
          400: z.object({ message: z.string() }),
        },
      },
    },
    wishListController.addWishList
  );

  app.withTypeProvider<ZodTypeProvider>().delete(
    "/wish-list/:userId/:movieId",
    {
      preHandler: [authController.autenticarToken],
      schema: {
        summary: "Remove from Wish List",
        tags: ["WishList"],
        params: z.object({
          userId: z.string().uuid(),
          movieId: z.string().uuid(),
        }),
        response: {
          204: z.null(),
          400: z.object({ message: z.string() }),
        },
      },
    },
    wishListController.removeWishList
  );
}
