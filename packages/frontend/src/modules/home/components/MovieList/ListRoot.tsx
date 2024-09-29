import { Movies } from "@/entities/api-models";
import { Box, SxProps, Typography } from "@mui/material";
import { Slide, Slider, SliderProps } from "../Slider";
import { Movie } from "../Movie";

interface MovieListProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export const MovieListRoot = ({ children, sx }: MovieListProps) => {
  return (
    <Box width="100%" mb={2} sx={{ ...sx }}>
      {children}
    </Box>
  );
};
