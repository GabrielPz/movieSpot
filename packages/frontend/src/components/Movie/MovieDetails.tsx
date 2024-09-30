import { Movie } from "@/entities/api-models";
import { MovieData } from "@/services/movies";
import { Box, Rating, Stack, styled, Typography } from "@mui/material";

interface MovieDetailsProps {
  movie: MovieData;
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
  const maxDescriptionLength = 300;
  const truncatedDescription =
    movie.description.length > maxDescriptionLength
      ? movie.description.substring(0, maxDescriptionLength) + "..."
      : movie.description;
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
            {movie.rating && (
              <StyledRating
                name="read-only"
                value={movie.rating}
                readOnly
                max={5}
              />
            )}

            <Typography variant="h3" color="white">
              Duração: {movie.duration} min
            </Typography>
          </Stack>
          <Typography
            variant="h3"
            color="white"
            maxWidth="600px"
            sx={{
              wordWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {truncatedDescription}
          </Typography>
          <Stack direction="column" gap={1}>
            <Stack direction="row" spacing={2}>
              <Typography variant="h4" color="secondary.main">
                Elenco:
              </Typography>
              <Typography variant="h4" color="white">
                {movie.actors.join(", ")}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Typography variant="h4" color="secondary.main">
                Categorias:
              </Typography>
              <Typography variant="h4" color="white">
                {movie.category.join(", ")}
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
            Duração: {movie.duration} min
          </Typography>
        </>
      )}
    </Box>
  );
};
