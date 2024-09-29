import { Movies } from "@/entities/api-models";
import { Box, Typography } from "@mui/material";
import { Slide, Slider, SliderProps } from "../Slider";
import { Movie } from "../Movie";

interface MovieListTitleProps {
  title: string;
}

export const MovieListTitle = ({ title }: MovieListTitleProps) => {
  return (
    <>
      <Typography variant="h2" color="white" mb={3} fontWeight={700}>
        {title}
      </Typography>
    </>
  );
};
