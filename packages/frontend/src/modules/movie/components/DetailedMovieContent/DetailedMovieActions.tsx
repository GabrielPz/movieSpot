import { Movie } from "@/entities/api-models";
import { Box, Button, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface MovieActionsProps {
  onClick: () => void;
  showRentButton?: boolean;
}

export const DetailedMovieActions = ({
  onClick,
  showRentButton = true,
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
      {showRentButton && (
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
      )}
    </Box>
  );
};
