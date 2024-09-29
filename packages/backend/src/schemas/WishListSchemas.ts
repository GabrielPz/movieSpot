import { z } from "zod";

export const wishListSchema = z.object({
  userId: z.string().uuid(),
  movieId: z.string().uuid(),
});

export type WishListDTO = z.infer<typeof wishListSchema>;
