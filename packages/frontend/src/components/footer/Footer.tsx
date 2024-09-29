import { Box, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        width: "100%",
        backgroundColor: "primary.main",
        overflow: "auto",
        borderTop: "1px solid #e50813",
        typography: {
          color: "white",
        },
      }}
    >
      <Box>
        <Typography variant="h3" fontWeight={700}>
          MovieStop
        </Typography>
        <Typography variant="body1">
          © {new Date().getFullYear()} MovieStop. All rights reserved.
        </Typography>
      </Box>
      <Stack direction="column" gap={1}>
        <Typography variant="h4" fontWeight={700}>
          Contato
        </Typography>
        <Typography variant="body1">gabrielhenriquedps@gmail.com</Typography>
        <Typography variant="body1">(81) 99265-7353</Typography>
        <Typography variant="body1">(81) 99265-7353</Typography>
      </Stack>
    </Box>
  );
};
