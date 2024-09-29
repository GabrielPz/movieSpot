import { Movie } from "@/entities/api-models";
import { Stack, Typography } from "@mui/material";

interface DetailedMovieDescProps {
  movie: Movie;
}

export const DetailedMovieDesc = ({ movie }: DetailedMovieDescProps) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        paddingLeft: 4,
        paddingTop: 3,
        paddingRight: 4,
        typography: {
          color: "white",
        },
      }}
    >
      <Typography variant="h1" fontWeight={700}>
        {movie.title}
      </Typography>
      <Typography variant="h4" fontWeight={500}>
        Data de Lançamento: {movie.releaseDate}
      </Typography>
      <Typography
        variant="h4"
        fontWeight={500}
        maxWidth="100%"
        sx={{
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {movie.description}
      </Typography>
    </Stack>
  );
};
