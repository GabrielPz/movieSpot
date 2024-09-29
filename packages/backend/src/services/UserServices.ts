import { prisma } from "../lib/prisma";
import { User } from "@prisma/client";
import { UserDTO } from "../schemas/UserSchemas";

export const userService = {
  async createUser(data: UserDTO): Promise<User> {
    return prisma.user.create({ data });
  },

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany();
  },

  async updateUser(id: string, data: Partial<UserDTO>): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  async deleteUser(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  },
};
