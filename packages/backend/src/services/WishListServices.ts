import { prisma } from "../lib/prisma";
import { WishListDTO } from "../schemas/WishListSchemas";

export const wishListService = {
  async addWishList(data: WishListDTO) {
    return prisma.wishList.create({
      data,
    });
  },

  async removeWishList(userId: string, movieId: string) {
    return prisma.wishList.deleteMany({
      where: {
        userId,
        movieId,
      },
    });
  },
};
