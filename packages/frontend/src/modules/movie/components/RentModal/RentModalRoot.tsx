import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface RentModalRootProps {
  children: ReactNode;
}

const style: SxProps = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    sm: "500px",
    md: "600px",
    lg: "800px",
  },
  height: "400px",
  bgcolor: "background.paper",
  borderRadius: 1,
  backgroundColor: "rgb(24, 22, 22)",
  boxShadow: 24,
  typography: {
    color: "white",
  },
  p: 4,
};

export const RentModalRoot = ({ children }: RentModalRootProps) => {
  return <Box sx={style}>{children}</Box>;
};
