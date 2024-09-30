"use client";

import { Box, CircularProgress, Modal, Typography } from "@mui/material";
import { mockedMovies } from "@/mock";
import { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { DetailedMovieContent } from "../../components/DetailedMovieContent";
import { RentModal } from "../../components/RentModal";
import {
  DetaileMovieData,
  MovieData,
  useGetMovieByID,
} from "@/services/movies";
import { useRouter, useSearchParams } from "next/navigation";
import { getStorageValue } from "@/utils/local-storage";
import { useAddRentedMovie } from "@/services/rentedMovies";
import { addMonths } from "date-fns";
import { toast } from "react-toastify";
import { LoginForm, RegisterForm } from "@/components/forms";
import { ErrorLoading } from "../../components/ErrorLoading";

export const DetailedMovie = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const handleOpenLoginModal = () => setOpenLoginModal(true);
  const handleCloseLoginModal = () => setOpenLoginModal(false);

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const handleChangeForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const rentalDate = new Date();
  const availableUntil = addMonths(rentalDate, 1);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const user = getStorageValue("userData", {});

  const {
    data: movie,
    isLoading: isLoadingMovie,
    isError: isMovieError,
    error: movieError,
    refetch,
  } = useGetMovieByID({
    requestParams: {
      id: id || "",
    },
  });

  const {
    mutate: addRentedMovie,
    isPending: isRenting,
    error: rentError,
  } = useAddRentedMovie();

  if (isLoadingMovie) {
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

  if (isMovieError) {
    <ErrorLoading />;
  }

  const handleConfirmRent = async () => {
    addRentedMovie(
      {
        body: {
          userId: user?.id,
          movieId: movie!.id,
          dueDate: availableUntil,
        },
      },
      {
        onError: (err) => {
          toast.error(err?.message || "Erro ao alugar filme");
        },
        onSuccess: async () => {
          toast.success("Filme alugado com sucesso");
          await refetch();
          handleClose();
        },
      }
    );
  };

  const defineUrl = (movie: DetaileMovieData) => {
    return movie!.rentedByCurrentUser ? movie!.movieUrl : movie!.trailerUrl;
  };

  const handleOpenModal = () => {
    if (user?.id) {
      handleOpen();
    } else {
      handleOpenLoginModal();
    }
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
        backgroundColor: "primary.main",
        overflow: "auto",
      }}
    >
      {movie && (
        <DetailedMovieContent.Root>
          <DetailedMovieContent.Video videoUrl={defineUrl(movie)} />
          <DetailedMovieContent.Desc movie={movie} />
          <DetailedMovieContent.Actions
            showRentButton={!movie.rentedByCurrentUser}
            onClick={handleOpenModal}
          />
        </DetailedMovieContent.Root>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RentModal.Root
          sx={{
            flexDirection: "column",
          }}
        >
          <RentModal.Content onClose={handleClose} movie={movie} />
          <RentModal.Actions
            onSubmit={handleConfirmRent}
            onCancel={handleClose}
            movieId={movie!.id}
          />
        </RentModal.Root>
      </Modal>
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RentModal.Root
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "auto",
            height: showRegisterForm ? "700" : "400px",
          }}
        >
          {showRegisterForm ? (
            <RegisterForm
              handleChangeForm={handleChangeForm}
              sx={{
                backgroundColor: "inherit",
              }}
            />
          ) : (
            <LoginForm
              handleChangeForm={handleChangeForm}
              sx={{
                backgroundColor: "inherit",
              }}
            />
          )}
        </RentModal.Root>
      </Modal>
      <Footer />
    </Box>
  );
};
