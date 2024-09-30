import { Movie } from "@/entities/api-models";
import { DetaileMovieData } from "@/services/movies";
import { Rating, Stack, styled, Typography } from "@mui/material";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#e50813",
  },
  "& .MuiRating-iconHover": {
    color: "#e50813",
  },
});

interface DetailedMovieDescProps {
  movie: DetaileMovieData;
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
      <Stack direction="row" gap={2}>
        <Typography variant="h1" fontWeight={700}>
          {movie!.title}
        </Typography>
        <Typography variant="h1" fontWeight={700}>
          - {movie!.duration} min
        </Typography>
      </Stack>
      <Typography variant="h3" fontWeight={700}>
        {movie!.rentedByCurrentUser ? "Assistindo filme" : "Assistindo trailer"}
      </Typography>
      {movie!.rating && (
        <StyledRating name="read-only" value={movie!.rating} readOnly max={5} />
      )}
      <Typography variant="h4" fontWeight={500}>
        Data de Lançamento: {movie!.releaseDate}
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
        {movie!.description}
      </Typography>

      <Stack direction="row" spacing={2}>
        <Typography variant="h4" color="secondary.main">
          Elenco:
        </Typography>
        <Typography variant="h4" color="white">
          {movie!.actors.join(", ")}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4" color="secondary.main">
          Idiomas:
        </Typography>
        <Typography variant="h4" color="white">
          {movie!.audioLanguages.join(", ")}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography variant="h4" color="secondary.main">
          Legendas:
        </Typography>
        <Typography variant="h4" color="white">
          {movie!.subtitles.join(", ")}
        </Typography>
      </Stack>
    </Stack>
  );
};
