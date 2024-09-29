import { z } from "zod";

export const rentedMovieSchema = z.object({
  userId: z.string().uuid(),
  movieId: z.string().uuid(),
  dueDate: z.string().transform((str) => new Date(str)),
});

export type RentedMovieDTO = z.infer<typeof rentedMovieSchema>;
