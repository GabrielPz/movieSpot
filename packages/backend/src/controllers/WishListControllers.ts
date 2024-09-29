import { FastifyReply, FastifyRequest } from "fastify";
import { wishListService } from "../services/WishListServices";
import { wishListSchema } from "../schemas/WishListSchemas";

export const wishListController = {
  async addWishList(request: FastifyRequest, reply: FastifyReply) {
    const wishListData = wishListSchema.parse(request.body);
    const wishList = await wishListService.addWishList(wishListData);
    return reply.status(201).send(wishList);
  },

  async removeWishList(request: FastifyRequest, reply: FastifyReply) {
    const { userId, movieId } = request.params as {
      userId: string;
      movieId: string;
    };
    await wishListService.removeWishList(userId, movieId);
    return reply.status(204).send();
  },
};
