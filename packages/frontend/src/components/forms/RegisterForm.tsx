import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

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

export const RegisterForm = ({ handleChangeForm }: LoginFormProps) => {
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
        Cadastrar
      </Typography>
      <CustomTextField
        label="Nome"
        variant="outlined"
        type="text"
        required
        fullWidth
        autoComplete="off"
      />
      <CustomTextField
        label="Telefone"
        variant="outlined"
        type="text"
        required
        fullWidth
        autoComplete="off"
      />
      <CustomTextField
        label="CPF"
        variant="outlined"
        type="text"
        required
        fullWidth
        autoComplete="off"
      />
      <CustomTextField
        label="Data de Nascimento"
        variant="outlined"
        type="date"
        InputLabelProps={{ shrink: true }}
        required
        fullWidth
        autoComplete="off"
      />
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
        Cadastrar
      </Button>
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
