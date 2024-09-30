import { prisma } from "../lib/prisma";
import { User } from "@prisma/client";
import { UserDTO } from "../schemas/UserSchemas";
import bcrypt from "bcrypt";

export const userService = {
  async createUser(data: UserDTO): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  },

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async getAllUsers(): Promise<User[]> {
    return prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async updateUser(id: string, data: Partial<UserDTO>): Promise<User> {
    let updatedData = data;
    if (data.password) {
      updatedData.password = await bcrypt.hash(data.password, 10);
    }
    return prisma.user.update({
      where: { id },
      data: {
        ...updatedData,
      },
    });
  },

  async deleteUser(id: string): Promise<User> {
    return prisma.user.delete({
      where: { id },
    });
  },
};
