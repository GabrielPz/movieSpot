import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface DefaultProps {
  onClose: () => void;
  isError?: boolean;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  sx?: SxProps;
}

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e50813",
    },
    "&:hover fieldset": {
      borderColor: "#e50813",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e50813",
    },
    "& input": {
      color: "white",
      backgroundColor: "transparent",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
});

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  birthdate: string;
};

interface CreateUserFormProps extends DefaultProps {}

export const CreateUserForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
}: CreateUserFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: yupResolver<RegisterFormData>(
      Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Email é obrigatório"),
        password: Yup.string()
          .required("Senha é obrigatória")
          .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
        phone: Yup.string()
          .required("Telefone é obrigatório")
          .min(11, { message: "Telefone deve ter no mínimo 11 caracteres" }),
        cpf: Yup.string()
          .required()
          .min(11, { message: "CPF deve ter no mínimo 11 caracteres" }),
        birthdate: Yup.string().required("Data de nascimento é obrigatória"),
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
        gap: 2,
        padding: 2,
        width: "100%",
        maxWidth: "400px",
        borderRadius: 1,
        backgroundColor: "rgba(0, 0, 0, 0.845)",
        boxShadow: 1,
        border: "none",
        ...sx,
      }}
    >
      <Typography variant="h4" fontWeight={700} color="white">
        Cadastrar
      </Typography>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="Nome"
              variant="outlined"
              type="text"
              required
              fullWidth
              autoComplete="off"
            />
          </FormControl>
        )}
      />
      <Controller
        name="phone"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="Telefone"
              variant="outlined"
              type="text"
              required
              fullWidth
              autoComplete="off"
            />
          </FormControl>
        )}
      />
      <Controller
        name="cpf"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="CPF"
              variant="outlined"
              type="text"
              required
              fullWidth
              autoComplete="off"
            />
          </FormControl>
        )}
      />
      <Controller
        name="birthdate"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="Data de Nascimento"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              required
              fullWidth
              autoComplete="off"
            />
          </FormControl>
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="Email"
              variant="outlined"
              type="email"
              required
              fullWidth
              autoComplete="off"
            />
          </FormControl>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field, fieldState: { error } }) => (
          <FormControl variant="outlined" sx={{ width: "100%" }}>
            <CustomTextField
              {...field}
              label="Senha"
              variant="outlined"
              type="password"
              required
              fullWidth
              autoComplete="new-password"
            />
          </FormControl>
        )}
      />
      <LoadingButton
        variant="contained"
        color="secondary"
        fullWidth
        type="submit"
        loading={isLoading}
      >
        Cadastrar
      </LoadingButton>
    </Box>
  );
};
