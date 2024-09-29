import { Movie } from "@/entities/api-models";
import { Box, Rating, Stack, styled, Typography } from "@mui/material";

interface MovieDetailsProps {
  movie: Movie;
  extended?: boolean;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#e50813",
  },
  "& .MuiRating-iconHover": {
    color: "#e50813",
  },
});

export const MovieDetails = ({
  movie,
  extended = false,
}: MovieDetailsProps) => {
  return (
    <Box
      sx={{
        zIndex: 3,
        mb: 3,
      }}
    >
      {extended ? (
        <Stack direction="column" gap={4}>
          <Typography
            variant="h2"
            color="white"
            fontWeight={700}
            fontSize="60px"
          >
            {movie.title}
          </Typography>
          <Stack direction="row" spacing={2}>
            {movie.additionalInfo.rating && (
              <StyledRating
                name="read-only"
                value={movie.additionalInfo.rating}
                readOnly
                max={5}
              />
            )}

            <Typography variant="h3" color="white">
              Duração: {movie.duration} min
            </Typography>
          </Stack>
          <Typography variant="h3" color="white">
            {movie.description}
          </Typography>
          <Stack direction="column" gap={1}>
            <Stack direction="row" spacing={2}>
              <Typography variant="h4" color="secondary.main">
                Elenco:
              </Typography>
              <Typography variant="h4" color="white">
                {movie.additionalInfo.actors.join(", ")}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="h4" color="secondary.main">
                Categorias:
              </Typography>
              <Typography variant="h4" color="white">
                {movie.additionalInfo.actors.join(", ")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      ) : (
        <>
          <Typography variant="h2" color="white" fontWeight={700}>
            {movie.title}
          </Typography>
          <Typography variant="h3" color="white">
            {movie.duration}
          </Typography>
        </>
      )}
    </Box>
  );
};
