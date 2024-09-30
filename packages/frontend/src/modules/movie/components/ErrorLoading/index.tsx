import { Box, Typography } from "@mui/material";

export const ErrorLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "primary.main",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 2,
          width: "100%",
          maxWidth: "400px",
          borderRadius: 1,
          backgroundColor: "rgba(0, 0, 0, 0.845)",
          boxShadow: 1,
          border: "none",
        }}
      >
        <Typography variant="h4" color="white">
          Erro ao buscar filme
        </Typography>
      </Box>
    </Box>
  );
};
