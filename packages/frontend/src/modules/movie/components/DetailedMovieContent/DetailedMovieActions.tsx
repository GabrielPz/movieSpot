import { Movie } from "@/entities/api-models";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface MovieActionsProps {
  movieInfo: Movie;
  onClick: () => void;
}

export const DetailedMovieActions = ({
  movieInfo,
  onClick,
}: MovieActionsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 1,
        zIndex: 3,
        pl: 4,
      }}
    >
      <Button
        startIcon={<PlayArrowIcon fontSize="large" />}
        variant="contained"
        onClick={onClick}
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          width: "200px",
          ":hover": { backgroundColor: "secondary.main" },
        }}
      >
        Alugar
      </Button>
    </Box>
  );
};
