import { Movie } from "@/entities/api-models";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { MovieData } from "@/services/movies";

interface MovieActionsProps {
  movieInfo: MovieData;
  buttonTitle?: string;
}

export const MovieActions = ({
  movieInfo,
  buttonTitle = "Alugar",
}: MovieActionsProps) => {
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
        {buttonTitle}
      </Button>
    </Box>
  );
};
