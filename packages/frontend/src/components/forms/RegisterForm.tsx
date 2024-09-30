import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  FormControl,
  FormHelperText,
  SxProps,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useLogin } from "@/services/auth";
import { useLocalStorage } from "@/utils/local-storage";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useCreateUser } from "@/services/users";
import LoadingButton from "@mui/lab/LoadingButton";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
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

interface RegisterFormProps {
  handleChangeForm: () => void;
  sx?: SxProps;
}

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  birthdate: string;
};

export const RegisterForm = ({ handleChangeForm, sx }: RegisterFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormData>({
    resolver: yupResolver<RegisterFormData>(
      Yup.object().shape({
        name: Yup.string().required("Nome é obrigatório"),
        email: Yup.string()
          .email("Email inválido")
          .required("Email é obrigatório"),
        password: Yup.string()
          .required("Senha é obrigatória")
          .min(6, "Senha deve ter no mínimo 6 caracteres"),
        phone: Yup.string()
          .required("Telefone é obrigatório")
          .min(11, "Telefone deve ter no mínimo 11 caracteres"),
        cpf: Yup.string()
          .required("CPF é obrigatório")
          .min(11, "CPF deve ter no mínimo 11 caracteres"),
        birthdate: Yup.string().required("Data de nascimento é obrigatória"),
      })
    ),
    mode: "onChange",
  });

  const { mutate: register, isPending: registerLoading } = useCreateUser();
  const onSubmit = (data: RegisterFormData) => {
    register(
      {
        body: data,
      },
      {
        onSuccess(resData) {
          toast.success("Cadastro realizado com sucesso");
          handleChangeForm();
        },
        onError: (err) => {
          toast.error(err?.message || "Erro ao realizar cadastro");
        },
      }
    );
  };
  return (
    <Box
      component="form"
      autoComplete="new-password"
      onSubmit={handleSubmit(onSubmit)}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
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
              error={!!error}
            />
            {<FormHelperText error>{error?.message || ""}</FormHelperText>}
          </FormControl>
        )}
      />
      <LoadingButton
        variant="contained"
        color="secondary"
        fullWidth
        type="submit"
        loading={registerLoading}
      >
        Cadastrar
      </LoadingButton>
      <Stack
        direction="row"
        justifyContent="center"
        gap={1}
        onClick={handleChangeForm}
        sx={{
          cursor: "pointer",

          typography: {
            color: "white",
          },
        }}
      >
        <Typography variant="body2">Já tem uma conta? </Typography>
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Entre
        </Typography>
      </Stack>
    </Box>
  );
};
