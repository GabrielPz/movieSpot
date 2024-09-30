import React, { useState } from "react";
import { Box, IconButton, Tooltip, CircularProgress } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import BaseActionModal from "../ActionModal/BaseActionModal";
import {
  CreateMovieForm,
  UpdateMovieForm,
  DeleteMovieForm,
} from "../Forms/MovieForms";
import {
  useCreateMovie,
  useUpdateMovie,
  useDeleteMovies,
  MovieData,
} from "@/services/movies";
import { toast } from "react-toastify";
import DataGrid from "@/components/data-table/DataGrid";

interface MoviesTableProps {
  movies: MovieData[];
  isLoading?: boolean;
  refetch: () => void;
}

export const MoviesTable = ({
  movies,
  isLoading = false,
  refetch,
}: MoviesTableProps) => {
  const [openModal, setOpenModal] = useState({
    createMovie: false,
    updateMovie: false,
    deleteMovie: false,
  });
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);
  const { mutate: createMovie, isPending: isCreatingMovie } = useCreateMovie();
  const { mutate: updateMovie, isPending: isUpdatingMovie } = useUpdateMovie();
  const { mutate: deleteMovie, isPending: isDeletingMovie } = useDeleteMovies();

  const handleOpenModal = (modal: string) => {
    setOpenModal({
      ...openModal,
      [modal]: true,
    });
  };

  const handleCloseModal = (modal: string) => {
    setOpenModal({
      ...openModal,
      [modal]: false,
    });
  };

  const handleCreateMovie = (data: MovieData) => {
    createMovie(
      {
        body: {
          ...data,
          actors: data.actors.map((actor: any) => actor.value),
          audioLanguages: data.audioLanguages.map(
            (language: any) => language.value
          ),
          category: data.category.map((category: any) => category.value),
          subtitles: data.subtitles.map((subtitle: any) => subtitle.value),
          producers: data.producers.map((producer: any) => producer.value),
        },
      },
      {
        onError: (error) => {
          toast.error(error?.message || "Erro ao criar filme");
        },
        onSuccess: () => {
          refetch();
          toast.success("Filme criado com sucesso");
          handleCloseModal("createMovie");
        },
      }
    );
  };

  const handleUpdateMovie = (data: Partial<MovieData>) => {
    updateMovie(
      {
        body: data,
        id: selectedMovie?.id || "",
      },
      {
        onError: (error) => {
          toast.error(error?.message || "Erro ao atualizar filme");
        },
        onSuccess: () => {
          refetch();
          toast.success("Filme atualizado com sucesso");
          handleCloseModal("updateMovie");
        },
      }
    );
  };

  const handleDeleteMovie = () => {
    deleteMovie(
      {
        id: selectedMovie?.id || "",
      },
      {
        onError: (error) => {
          toast.error(error?.message || "Erro ao deletar filme");
        },
        onSuccess: () => {
          toast.success("Filme deletado com sucesso");
          refetch();
          handleCloseModal("deleteMovie");
        },
      }
    );
  };

  return (
    <>
      <BaseActionModal
        title="Criar filme"
        sx={{
          alignItems: "",
          width: "auto",
          justifyContent: "",
        }}
        body={
          <CreateMovieForm
            onSubmit={handleCreateMovie}
            isLoading={isCreatingMovie}
            onClose={() => {
              handleCloseModal("createMovie");
            }}
          />
        }
        open={openModal.createMovie}
        handleClose={() => {
          handleCloseModal("createMovie");
        }}
        handleConfirm={() => console.log("confirm")}
      />
      <BaseActionModal
        title="Atualizar filme"
        sx={{
          alignItems: "",
          width: "auto",
          justifyContent: "",
        }}
        body={
          <UpdateMovieForm
            onSubmit={handleUpdateMovie}
            isLoading={isUpdatingMovie}
            defaultValues={selectedMovie || {}}
            onClose={() => {
              handleCloseModal("updateMovie");
            }}
          />
        }
        open={openModal.updateMovie}
        handleClose={() => {
          handleCloseModal("updateMovie");
        }}
        handleConfirm={() => console.log("confirm")}
      />
      <BaseActionModal
        title="Deletar filme"
        sx={{
          height: "auto",
        }}
        body={
          <DeleteMovieForm
            onSubmit={handleDeleteMovie}
            isLoading={isDeletingMovie}
            onClose={() => {
              handleCloseModal("deleteMovie");
            }}
          />
        }
        open={openModal.deleteMovie}
        handleClose={() => {
          handleCloseModal("deleteMovie");
        }}
        handleConfirm={() => console.log("confirm")}
      />

      <DataGrid
        title="Lista de Filmes"
        ActionButton={
          <Tooltip title="Adicionar filme" arrow>
            <IconButton
              onClick={() => handleOpenModal("createMovie")}
              sx={{
                color: "secondary.main",
              }}
            >
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        }
        sx={{
          minWidth: "800px",
          width: "100%",
          height: "100%",
        }}
        columns={[
          {
            headerName: "Título",
            field: "title",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: MovieData }) => {
              return row.title;
            },
          },
          {
            headerName: "Diretor",
            field: "director",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: MovieData }) => {
              return row.director;
            },
          },

          {
            field: "action",
            headerName: "",
            sortable: false,
            disableColumnMenu: true,
            width: 120,
            align: "left",
            renderCell: ({ row }: { row: MovieData }) => (
              <>
                <IconButton
                  onClick={() => {
                    setSelectedMovie(row);
                    handleOpenModal("updateMovie");
                  }}
                >
                  <ModeEditOutlineIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setSelectedMovie(row);
                    handleOpenModal("deleteMovie");
                  }}
                >
                  <DeleteIcon color="secondary" />
                </IconButton>
              </>
            ),
          },
        ]}
        rows={movies || []}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
      />
    </>
  );
};
