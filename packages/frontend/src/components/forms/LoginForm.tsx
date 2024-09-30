"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { useLogin } from "@/services/auth";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLocalStorage } from "@/utils/local-storage";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

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

interface LoginFormProps {
  handleChangeForm: () => void;
}

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = ({ handleChangeForm }: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver<LoginFormData>(
      Yup.object().shape({
        email: Yup.string().required("Insira um email"),
        password: Yup.string().required("Insira uma senha"),
      })
    ),
  });

  const { mutate: login, isPending: loginLoading } = useLogin();
  const onSubmit = (data: LoginFormData) => {
    login(
      {
        body: data,
      },
      {
        onSuccess(resData) {
          useLocalStorage("userData", resData);
          toast.success("Login efetuado com sucesso");
          window.location.reload();
        },
        onError: (err) => {
          console.log(err);
          toast.error(err?.message || "Credênciais inválidas");
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
      }}
    >
      <Typography variant="h4" fontWeight={700} color="white">
        Login
      </Typography>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
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
        render={({ field }) => (
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
        loading={loginLoading}
      >
        Entrar
      </LoadingButton>
      <Stack
        direction="row"
        justifyContent="center"
        onClick={handleChangeForm}
        gap={1}
        sx={{
          cursor: "pointer",

          typography: {
            color: "white",
          },
        }}
      >
        <Typography variant="body2">Não tem uma conta? </Typography>
        <Typography variant="body2" sx={{ textDecoration: "underline" }}>
          Cadastre-se
        </Typography>
      </Stack>
    </Box>
  );
};
