import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { UserData } from "@/services/users";
import { useEffect } from "react";

interface DefaultProps {
  onClose: () => void;
  isError?: boolean;
  onSubmit: (data: any) => void;
  isLoading?: boolean;
  sx?: SxProps;
}

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: "10px",
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
type UpdateFormData = {
  name: string;
  email: string;
  phone: string;
  cpf: string;
};

interface CreateUserFormProps extends DefaultProps {}
interface UpdateUserFormProps extends DefaultProps {
  defaultValues?: Partial<UserData>;
  buttonLabel?: string;
}
interface DeleteUserFormProps extends DefaultProps {
  onSubmit: () => void;
}

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
        disabled={!isValid}
        type="submit"
        loading={isLoading}
      >
        Cadastrar
      </LoadingButton>
    </Box>
  );
};

export const UpdateUSerForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
  defaultValues = {},
  buttonLabel = "Cadastrar",
}: UpdateUserFormProps) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<UpdateFormData>({
    mode: "onChange",
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) {
      setValue("name", defaultValues.name || "");
      setValue("email", defaultValues.email || "");
      setValue("phone", defaultValues.phone || "");
      setValue("cpf", defaultValues.cpf || "");
    }
  }, [defaultValues, setValue]);

  console.log(errors);

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
        name="name"
        control={control}
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
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="phone"
        control={control}
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
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="cpf"
        control={control}
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
            {error && <FormHelperText error>{error.message}</FormHelperText>}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        disabled
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
            {error && <FormHelperText error>{error.message}</FormHelperText>}
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
        Atualizar
      </LoadingButton>
    </Box>
  );
};

export const DeleteUserForm = ({
  onClose,
  onSubmit,
  isLoading = false,
  sx,
}: DeleteUserFormProps) => {
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
      <Typography variant="h4">
        Deseja realmente deletar o usuário? Essa ação é irreversível.
      </Typography>
      <Stack direction="row" gap={2}>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={onClose}
        >
          Cancelar
        </Button>
        <LoadingButton
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
          loading={isLoading}
        >
          Deletar
        </LoadingButton>
      </Stack>
    </Box>
  );
};
