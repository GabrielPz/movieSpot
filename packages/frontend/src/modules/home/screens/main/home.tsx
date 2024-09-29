"use client";

import { Box, Collapse, Fade } from "@mui/material";
import { Movie } from "../../components/Movie";
import { Movie as MovieType } from "@/entities/api-models";
import { Slide, Slider, SliderProps } from "../../components/Slider";
import { mockedMovies } from "@/mock";
import { useState } from "react";

export const Home = () => {
  const mainSliderSettings: SliderProps = {
    slidesPerView: 4.1,
  };

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
        paddingLeft: "3rem",
      }}
    >
      <Box width="100%">
        <Slider settings={mainSliderSettings}>
          {mockedMovies.map((movie) => (
            <Slide key={movie.id}>
              <Movie.Root movie={movie} key={movie.id}>
                <Movie.Details movie={movie} />
                <Movie.Actions movieInfo={movie} />
              </Movie.Root>
            </Slide>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
