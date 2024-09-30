import React from "react";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Typography,
  SxProps,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface DefaultProps {
  onClose: () => void;
  isError?: boolean;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  sx?: SxProps;
}

type MovieFormData = {
  title: string;
  director: string;
  year: string;
};

interface CreateMovieFormProps extends DefaultProps {}
interface UpdateMovieFormProps extends DefaultProps {
  defaultValues?: Partial<MovieFormData>;
  buttonLabel?: string;
}
interface DeleteMovieFormProps extends DefaultProps {
  onSubmit: () => void;
}

export const CreateMovieForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
}: CreateMovieFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<MovieFormData>({
    resolver: yupResolver<MovieFormData>(
      Yup.object().shape({
        title: Yup.string().required("Título é obrigatório"),
        director: Yup.string().required("Diretor é obrigatório"),
        year: Yup.string().required("Ano é obrigatório"),
      })
    ),
    mode: "onChange",
  });

  const onSubmitForm = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Box
      component="form"
      autoComplete="new-password"
      onSubmit={onSubmitForm}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        border: "none",
        ...sx,
      }}
    >
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Título"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name="director"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Diretor"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name="year"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Ano"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid || isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : "Criar"}
      </Button>
    </Box>
  );
};

export const UpdateMovieForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
  defaultValues = {},
  buttonLabel = "Atualizar",
}: UpdateMovieFormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<MovieFormData>({
    mode: "onChange",
    defaultValues,
  });

  const onSubmitForm = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <Box
      component="form"
      autoComplete="new-password"
      onSubmit={onSubmitForm}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        height: "100%",
        border: "none",
        ...sx,
      }}
    >
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Título"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name="director"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Diretor"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Controller
        name="year"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            label="Ano"
            variant="outlined"
            type="text"
            required
            fullWidth
            autoComplete="off"
            error={!!error}
            helperText={error ? error.message : null}
            {...field}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!isValid || isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : buttonLabel}
      </Button>
    </Box>
  );
};

export const DeleteMovieForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
}: DeleteMovieFormProps) => {
  return (
    <Box
      component="form"
      autoComplete="new-password"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
        border: "none",
        ...sx,
      }}
    >
      <Typography variant="body1">
        Tem certeza que deseja deletar este filme?
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : "Deletar"}
      </Button>
    </Box>
  );
};
