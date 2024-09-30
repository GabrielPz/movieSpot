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
import {
  RentedMovieData,
  useGetRentedMoviesByUser,
} from "@/services/rentedMovies";
import { getStorageValue } from "@/utils/local-storage";

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

  const user = getStorageValue("userData", {});

  const { data: movies, isLoading: isLoadingMovies } = useGetMovies({
    requestParams: {},
  });
  const { data: rentedMovies, isLoading: isLoadingRentedMovies } =
    useGetRentedMoviesByUser({
      requestParams: {
        userId: user?.id || "",
      },
    });

  if (isLoadingMovies || isLoadingRentedMovies) {
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
          {rentedMovies && rentedMovies?.length > 0 && (
            <MovieList.root
              sx={{
                paddingLeft: "3rem",
              }}
            >
              <MovieList.title title="Meus Filmes" />
              <MovieList.content settings={mainSliderSettings}>
                {rentedMovies.map((movie: RentedMovieData) => (
                  <Slide key={movie.id}>
                    <Movie.Root movie={movie.movie as MovieData} key={movie.id}>
                      <Movie.Details movie={movie.movie as MovieData} />
                      <Movie.Actions
                        movieInfo={movie.movie as MovieData}
                        buttonTitle="Assistir"
                      />
                    </Movie.Root>
                  </Slide>
                ))}
              </MovieList.content>
            </MovieList.root>
          )}
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
            <MovieList.title title="Aventura" />
            <MovieList.content settings={mainSliderSettings}>
              {movies
                .filter((movie) => movie.category.includes("Aventura"))
                .map((movie: MovieData) => (
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
            <MovieList.title title="Fantasia" />
            <MovieList.content settings={mainSliderSettings}>
              {movies
                .filter((movie) => movie.category.includes("Fantasia"))
                .map((movie: MovieData) => (
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
