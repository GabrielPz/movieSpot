import { z } from "zod";

export const movieSchema = z.object({
  title: z.string().min(1, { message: "O título é obrigatório." }),
  subTitle: z.string().min(1, { message: "O Subtítulo é obrigatório." }), // Se o subTitle for opcional, use .optional()
  description: z.string().min(1, { message: "A descrição é obrigatória." }),
  duration: z
    .number()
    .min(1, { message: "A duração deve ser um número positivo." }),
  releaseDate: z
    .string()
    .min(1, { message: "A data de lançamento é obrigatória." }),
  minimumAge: z
    .number()
    .min(0, { message: "A idade mínima deve ser maior ou igual a 0." }),
  rentPrice: z
    .number()
    .min(0, { message: "O preço de aluguel deve ser maior ou igual a 0." }),
  category: z
    .array(z.string())
    .nonempty({ message: "A categoria deve ter pelo menos um valor." }),
  trailerUrl: z.string().url({ message: "O URL do trailer deve ser válido." }),
  movieUrl: z.string().url({ message: "O URL do filme deve ser válido." }),
  imageUrl: z.string().url({ message: "O URL da imagem deve ser válido." }),
  director: z.string().min(1, { message: "O nome do diretor é obrigatório." }),
  actors: z
    .array(z.string())
    .nonempty({ message: "Deve haver pelo menos um ator." }),
  producers: z
    .array(z.string())
    .nonempty({ message: "Deve haver pelo menos um produtor." }),
  studio: z.string().min(1, { message: "O estúdio é obrigatório." }),
  contentClassification: z
    .string()
    .min(1, { message: "A classificação de conteúdo é obrigatória." }),
  subtitles: z
    .array(z.string())
    .nonempty({ message: "Pelo menos uma legenda é obrigatória." }),
  audioLanguages: z
    .array(z.string())
    .nonempty({ message: "Pelo menos um idioma de áudio é obrigatório." }),
  rating: z.number().optional(),
});

export type MovieDTO = z.infer<typeof movieSchema>;
