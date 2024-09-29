"use client";

import { Box, Modal } from "@mui/material";
import { mockedMovies } from "@/mock";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { DetailedMovieContent } from "../../components/DetailedMovieContent";
import { RentModal } from "../../components/RentModal";

export const DetailedMovie = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <DetailedMovieContent.Desc movie={mockedMovies[0]} />
        <DetailedMovieContent.Actions
          onClick={handleOpen}
          movieInfo={mockedMovies[0]}
        />
      </DetailedMovieContent.Root>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RentModal.Root>
          <RentModal.Content onClose={handleClose} movie={mockedMovies[0]} />
          <RentModal.Actions
            onSubmit={handleClose}
            onCancel={handleClose}
            movieId={mockedMovies[0].id}
          />
        </RentModal.Root>
      </Modal>
      <Footer />
    </Box>
  );
};
