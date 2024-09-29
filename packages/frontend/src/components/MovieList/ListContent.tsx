import { Movies } from "@/entities/api-models";
import { Box, Typography } from "@mui/material";
import { Slide, Slider, SliderProps } from "../Slider";
import { Movie } from "../Movie";
import { ReactNode } from "react";

interface MovieListContentProps {
  children: ReactNode;
  settings: SliderProps;
}

export const MovieListContent = ({
  children,
  settings,
}: MovieListContentProps) => {
  return (
    <Box width="100%">
      <Slider settings={settings}>{children}</Slider>
    </Box>
  );
};
