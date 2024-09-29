import { Box } from "@mui/material";
import { ReactNode } from "react";

interface DetailedMovieRootProps {
  children: ReactNode;
}
export const DetailedMovieRoot = ({ children }: DetailedMovieRootProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
