import React from "react";
import {
  Box,
  Button,
  TextField,
  CircularProgress,
  Typography,
  SxProps,
  Stack,
  Grid,
} from "@mui/material";
import { useForm, Controller, Control, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import ArrayInput from "../ArrayInput";

interface DefaultProps {
  onClose: () => void;
  isError?: boolean;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  sx?: SxProps;
}

type MovieFormData = {
  title: string;
  subTitle: string;
  description: string;
  duration: number;
  releaseDate: string;
  minimumAge: number;
  rentPrice: number;
  category: Array<string>;
  trailerUrl: string;
  movieUrl: string;
  imageUrl: string;
  director: string;
  actors: Array<string>;
  producers: Array<string>;
  studio: string;
  contentClassification: string;
  subtitles: Array<string>;
  audioLanguages: Array<string>;
  rating?: number;
};

interface CreateMovieFormProps extends DefaultProps {}
interface UpdateMovieFormProps extends DefaultProps {
  defaultValues?: Partial<MovieFormData>;
  buttonLabel?: string;
}

interface DeleteMovieFormProps extends DefaultProps {
  onSubmit: () => void;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  subTitle: Yup.string().required("Subtítulo é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  duration: Yup.number().required("Duração é obrigatória"),
  releaseDate: Yup.string().required("Data de Lançamento é obrigatória"),
  minimumAge: Yup.number().required("Idade Mínima é obrigatória"),
  rentPrice: Yup.number().required("Preço de Aluguel é obrigatório"),
  category: Yup.array().required("Categoria é obrigatória"),
  trailerUrl: Yup.string().required("URL do Trailer é obrigatória"),
  movieUrl: Yup.string().required("URL do Filme é obrigatória"),
  imageUrl: Yup.string().required("URL da Imagem é obrigatória"),
  director: Yup.string().required("Diretor é obrigatório"),
  actors: Yup.array().required("Atores é obrigatório"),
  producers: Yup.array().required("Produtores é obrigatório"),
  studio: Yup.string().required("Estúdio é obrigatório"),
  contentClassification: Yup.string().required(
    "Classificação de Conteúdo é obrigatória"
  ),
  subtitles: Yup.array().required("Legendas é obrigatório"),
  audioLanguages: Yup.array().required("Idiomas de Áudio é obrigatório"),
  rating: Yup.number().max(5, "Avaliação deve ser menor ou igual a 5"),
});

interface FormField {
  name: keyof MovieFormData;
  label: string;
  type: string;
  defaultValue: any;
}

interface FormGroup {
  group: string;
  fields: Array<FormField>;
}

type FormFields = Array<FormGroup>;

const formFields: FormFields = [
  {
    group: "Informações Principais",
    fields: [
      { name: "title", label: "Título", type: "text", defaultValue: "" },
      { name: "subTitle", label: "Subtítulo", type: "text", defaultValue: "" },
      {
        name: "description",
        label: "Descrição",
        type: "text",
        defaultValue: "",
      },
    ],
  },
  {
    group: "Detalhes do Filme",
    fields: [
      {
        name: "duration",
        label: "Duração em minutos",
        type: "number",
        defaultValue: 60,
      },
      {
        name: "releaseDate",
        label: "Data de Lançamento",
        type: "date",
        defaultValue: "",
      },
      {
        name: "minimumAge",
        label: "Idade Mínima",
        type: "number",
        defaultValue: 16,
      },
      {
        name: "rentPrice",
        label: "Preço de Aluguel",
        type: "number",
        defaultValue: 25,
      },
      { name: "category", label: "Categoria", type: "array", defaultValue: [] },
    ],
  },
  {
    group: "URLs",
    fields: [
      {
        name: "trailerUrl",
        label: "URL do Trailer",
        type: "url",
        defaultValue: "",
      },
      {
        name: "movieUrl",
        label: "URL do Filme",
        type: "url",
        defaultValue: "",
      },
      {
        name: "imageUrl",
        label: "URL da Imagem",
        type: "url",
        defaultValue: "",
      },
    ],
  },
  {
    group: "Informações Adicionais",
    fields: [
      { name: "director", label: "Diretor", type: "text", defaultValue: "" },
      { name: "actors", label: "Atores", type: "array", defaultValue: [] },
      {
        name: "producers",
        label: "Produtores",
        type: "array",
        defaultValue: [],
      },
      { name: "studio", label: "Estúdio", type: "text", defaultValue: "" },
      {
        name: "contentClassification",
        label: "Classificação de Conteúdo",
        type: "text",
        defaultValue: "",
      },
      { name: "subtitles", label: "Legendas", type: "array", defaultValue: [] },
      {
        name: "audioLanguages",
        label: "Idiomas de Áudio",
        type: "array",
        defaultValue: [],
      },
      { name: "rating", label: "Avaliação", type: "number", defaultValue: 5 },
    ],
  },
];

const renderFields = (
  fields: Array<FormField>,
  control: Control<MovieFormData> | undefined
) => {
  return fields.map(({ name, label, type, defaultValue }) => (
    <Grid item key={name}>
      {type === "array" ? (
        <ArrayInput name={name} label={label} control={control} />
      ) : (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label={label}
              variant="outlined"
              type={type}
              InputLabelProps={type === "date" ? { shrink: true } : {}}
              required
              fullWidth
              autoComplete="off"
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
      )}
    </Grid>
  ));
};

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
    resolver: yupResolver<MovieFormData>(validationSchema),
    mode: "onChange",
  });

  const onSubmitForm = handleSubmit((data) => {
    onSubmit(data);
  });
  console.log(errors);
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
        height: "inherit",
        width: "inherit",
        border: "none",
        ...sx,
      }}
    >
      {formFields.map((group) => (
        <Box key={group.group} sx={{ width: "100%", marginBottom: "1rem" }}>
          <Typography variant="h6" gutterBottom>
            {group.group}
          </Typography>
          <Grid container spacing={2}>
            {renderFields(group.fields, control)}
          </Grid>
        </Box>
      ))}
      <Stack direction="row" gap={2} mb={3}>
        <Button
          variant="outlined"
          color="secondary"
          disabled={isLoading}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          color="secondary"
          loading={isLoading}
          disabled={!isValid}
        >
          Criar
        </LoadingButton>
      </Stack>
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
    formState: { errors, isValid },
  } = useForm<MovieFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...defaultValues,
      actors: defaultValues.actors || [],
    },
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
        height: "inherit",
        width: "inherit",
        border: "none",
        ...sx,
      }}
    >
      {formFields.map((group) => (
        <Box key={group.group} sx={{ width: "100%", marginBottom: "1rem" }}>
          <Typography variant="h6" gutterBottom>
            {group.group}
          </Typography>
          <Grid container spacing={2}>
            {renderFields(group.fields, control)}
          </Grid>
        </Box>
      ))}
      <Stack direction="row" gap={2} mb={3}>
        <Button
          variant="outlined"
          color="secondary"
          disabled={isLoading}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          color="secondary"
          disabled={!isValid}
          loading={isLoading}
        >
          {buttonLabel}
        </LoadingButton>
      </Stack>
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
      <Stack direction="row" gap={2}>
        <Button
          variant="outlined"
          color="secondary"
          disabled={isLoading}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <LoadingButton
          type="submit"
          variant="contained"
          color="secondary"
          loading={isLoading}
        >
          Deletar
        </LoadingButton>
      </Stack>
    </Box>
  );
};
