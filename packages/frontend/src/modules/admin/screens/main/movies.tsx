"use client";

import { Box, Card, Skeleton } from "@mui/material";
import { useState } from "react";
import { useGetMovies } from "@/services/movies";
import { MoviesTable } from "../../components/MovieDataGrid";

export function Movies() {
  const {
    data: movies,
    isSuccess,
    isLoading: isLoadingMovies,
    refetch,
  } = useGetMovies({
    requestParams: {},
  });

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {isSuccess && movies.length > 0 ? (
        <Card
          elevation={5}
          sx={{
            position: "absolute",
            padding: 3,
          }}
        >
          <MoviesTable
            refetch={refetch}
            movies={movies}
            isLoading={isLoadingMovies}
          />
        </Card>
      ) : (
        <Skeleton sx={{ width: "80%", height: "50%" }} />
      )}
    </Box>
  );
}
