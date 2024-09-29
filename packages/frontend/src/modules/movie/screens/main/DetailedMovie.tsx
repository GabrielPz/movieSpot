"use client";

import { Box } from "@mui/material";
import { mockedMovies } from "@/mock";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { DetailedMovieContent } from "../../components/DetailedMovieContent";

export const DetailedMovie = () => {
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
      <DetailedMovieContent.Root>
        <DetailedMovieContent.Video videoUrl="https://www.youtube.com/watch?v=G7RTk7OwsMg" />
      </DetailedMovieContent.Root>
      <Footer />
    </Box>
  );
};
