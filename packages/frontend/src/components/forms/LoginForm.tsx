import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";

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

export const LoginForm = ({ handleChangeForm }: LoginFormProps) => {
  return (
    <Box
      component="form"
      autoComplete="new-password"
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
      <CustomTextField
        label="Email"
        variant="outlined"
        type="email"
        required
        fullWidth
        autoComplete="off"
      />
      <CustomTextField
        label="Senha"
        variant="outlined"
        type="password"
        required
        fullWidth
        autoComplete="new-password"
      />
      <Button variant="contained" color="secondary" fullWidth>
        Entrar
      </Button>
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
