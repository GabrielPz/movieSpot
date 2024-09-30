import { Box, Button } from "@mui/material";

interface RentModalActionsProps {
  onSubmit: () => void;
  movieId: string;
  onCancel: () => void;
}

export const RentModalActions = ({
  movieId,
  onSubmit,
  onCancel,
}: RentModalActionsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        mt: 3,
        gap: 2,
      }}
    >
      <Button
        variant="outlined"
        onClick={onCancel}
        sx={{
          color: "white",
          borderColor: "secondary.main",
          width: "200px",
          ":hover": { borderColor: "secondary.main" },
        }}
      >
        Cancelar
      </Button>
      <Button
        variant="contained"
        onClick={onSubmit}
        sx={{
          backgroundColor: "secondary.main",
          color: "white",
          width: "200px",
          ":hover": { backgroundColor: "secondary.main" },
        }}
      >
        Confirmar
      </Button>
    </Box>
  );
};
