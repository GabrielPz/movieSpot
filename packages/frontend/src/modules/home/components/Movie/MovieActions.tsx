import { Movie } from "@/entities/api-models";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface MovieActionsProps {
  movieInfo: Movie;
}

export const MovieActions = ({ movieInfo }: MovieActionsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 1,
        zIndex: 3,
      }}
    >
      <Button
        startIcon={<PlayArrowIcon fontSize="large" />}
        variant="contained"
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          width: "200px",
        }}
      >
        Alugar
      </Button>
    </Box>
  );
};
