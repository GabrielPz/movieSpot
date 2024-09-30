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

  async getUserWishList(userId: string) {
    return prisma.wishList.findMany({
      where: { userId },
    });
  },

  async getAllWishLists() {
    return prisma.wishList.findMany();
  },

  async removeWishListById(id: string) {
    return prisma.wishList.delete({
      where: { id },
    });
  },
};
