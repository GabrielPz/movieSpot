"use client";

import { Box, Collapse, Fade, Typography } from "@mui/material";
import { Movie } from "../../../../components/Movie";
import { Movie as MovieType } from "@/entities/api-models";
import { Slide, Slider, SliderProps } from "../../../../components/Slider";
import { mockedMovies } from "@/mock";
import { useState } from "react";
import { MovieList } from "../../../../components/MovieList";
import { Footer } from "@/components/footer";
import { useRouter } from "next/router";

export const MyArea = () => {
  const mainSliderSettings: SliderProps = {
    slidesPerView: 4.1,
    navigation: true,
    loop: true,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        height: "100%",
        width: "100%",
        paddingTop: "10rem",
        backgroundColor: "primary.main",
        overflow: "auto",
      }}
    >
      <MovieList.root
        sx={{
          paddingLeft: "3rem",
        }}
      >
        <MovieList.title title="Alugados" />
        <MovieList.content settings={mainSliderSettings}>
          {mockedMovies.map((movie: MovieType) => (
            <Slide key={movie.id}>
              <Movie.Root movie={movie} key={movie.id}>
                <Movie.Details movie={movie} />
              </Movie.Root>
            </Slide>
          ))}
        </MovieList.content>
      </MovieList.root>
      <MovieList.root
        sx={{
          paddingLeft: "3rem",
        }}
      >
        <MovieList.title title="Lista de Desejos" />
        <MovieList.content settings={mainSliderSettings}>
          {mockedMovies.map((movie: MovieType) => (
            <Slide key={movie.id}>
              <Movie.Root movie={movie} key={movie.id}>
                <Movie.Details movie={movie} />
                <Movie.Actions movieInfo={movie} />
              </Movie.Root>
            </Slide>
          ))}
        </MovieList.content>
      </MovieList.root>
      <Footer />
    </Box>
  );
};
