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

  app.withTypeProvider<ZodTypeProvider>().get(
    "/wish-list/:userId",
    {
      preHandler: [authController.autenticarToken],
      schema: {
        summary: "Get User's Wish List",
        tags: ["WishList"],
        params: z.object({
          userId: z.string().uuid(),
        }),
        response: {
          200: z.array(wishListSchema.extend({ id: z.string().uuid() })),
          400: z.object({ message: z.string() }),
        },
      },
    },
    wishListController.getUserWishList
  );

  app.withTypeProvider<ZodTypeProvider>().get(
    "/wish-list",
    {
      preHandler: [
        authController.autenticarToken,
        authController.checkRole(["ADMIN"]),
      ],
      schema: {
        summary: "Get All Wish Lists",
        tags: ["WishList"],
        response: {
          200: z.array(wishListSchema.extend({ id: z.string().uuid() })),
          400: z.object({ message: z.string() }),
        },
      },
    },
    wishListController.getAllWishLists
  );

  app.withTypeProvider<ZodTypeProvider>().delete(
    "/wish-list/:id",
    {
      preHandler: [
        authController.autenticarToken,
        authController.checkRole(["ADMIN"]),
      ],
      schema: {
        summary: "Remove Wish List by ID",
        tags: ["WishList"],
        params: z.object({
          id: z.string().uuid(),
        }),
        response: {
          204: z.null(),
          400: z.object({ message: z.string() }),
        },
      },
    },
    wishListController.removeWishListById
  );
}
