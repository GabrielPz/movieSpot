import { Movie } from "@/entities/api-models";
import { Box, Typography } from "@mui/material";

interface MovieDetailsProps {
  movie: Movie;
}

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <Box
      sx={{
        zIndex: 3,
      }}
    >
      <Typography variant="h2" color="white" fontWeight={700}>
        {movie.title}
      </Typography>
      <Typography variant="h3" color="white">
        {movie.duration}
      </Typography>
    </Box>
  );
};
