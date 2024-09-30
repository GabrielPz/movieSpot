"use client";

import {
  Box,
  CircularProgress,
  Collapse,
  Fade,
  Typography,
} from "@mui/material";
import { Movie } from "../../../../components/Movie";
import { Movie as MovieType } from "@/entities/api-models";
import { Slide, Slider, SliderProps } from "../../../../components/Slider";
import { mockedMovies } from "@/mock";
import { useState } from "react";
import { MovieList } from "../../../../components/MovieList";
import { Footer } from "@/components/footer";
import { useRouter } from "next/router";
import { MovieData, useGetMovies } from "@/services/movies";

export const Home = () => {
  const topSliderSettings: SliderProps = {
    slidesPerView: 1,
    navigation: true,
    loop: true,
    speed: 800,
    autoplay: { delay: 10000 },
  };
  const mainSliderSettings: SliderProps = {
    slidesPerView: 4.1,
    navigation: true,
    loop: true,
  };

  const { data: movies, isLoading: isLoadingMovies } = useGetMovies({
    requestParams: {},
  });

  if (isLoadingMovies) {
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
        <CircularProgress
          sx={{
            color: "secondary.main",
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "primary.main",
        overflow: "auto",
      }}
    >
      {movies && movies?.length > 0 ? (
        <>
          <MovieList.root>
            <MovieList.content settings={topSliderSettings}>
              {movies.map((movie: MovieData) => (
                <Slide key={movie.id}>
                  <Movie.Root
                    movie={movie}
                    key={movie.id}
                    sx={{
                      width: "100%",
                      height: "600px",
                      ":hover": {
                        transform: "scale(1)",
                      },
                    }}
                  >
                    <Movie.Details movie={movie} extended={true} />
                    <Movie.Actions movieInfo={movie} />
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
            <MovieList.title title="Em alta" />
            <MovieList.content settings={mainSliderSettings}>
              {movies.map((movie: MovieData) => (
                <Slide key={movie.id}>
                  <Movie.Root movie={movie} key={movie.id}>
                    <Movie.Details movie={movie} />
                    <Movie.Actions movieInfo={movie} />
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
            <MovieList.title title="Em alta" />
            <MovieList.content settings={mainSliderSettings}>
              {movies.map((movie: MovieData) => (
                <Slide key={movie.id}>
                  <Movie.Root movie={movie} key={movie.id}>
                    <Movie.Details movie={movie} />
                    <Movie.Actions movieInfo={movie} />
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
            <MovieList.title title="Em alta" />
            <MovieList.content settings={mainSliderSettings}>
              {movies.map((movie: MovieData) => (
                <Slide key={movie.id}>
                  <Movie.Root movie={movie} key={movie.id}>
                    <Movie.Details movie={movie} />
                    <Movie.Actions movieInfo={movie} />
                  </Movie.Root>
                </Slide>
              ))}
            </MovieList.content>
          </MovieList.root>
        </>
      ) : (
        <Typography color="secondary.main" variant="h1" alignSelf="center">
          Nenhum filme encontrado
        </Typography>
      )}
      <Footer />
    </Box>
  );
};
