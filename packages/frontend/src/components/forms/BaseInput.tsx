import React, { ReactNode } from "react";
import { Controller, Control } from "react-hook-form";
import {
  OutlinedInputProps,
  FormControl,
  InputLabel,
  OutlinedInput as InputMUI,
  FormHelperText,
} from "@mui/material";

interface Props {
  label?: string;
  name: string;
  children: ReactNode;
  control: Control<any>;
  required?: boolean;
  helperText?: string;
}

type InputWrapperProps = Props & OutlinedInputProps;

const Input: React.FC<InputWrapperProps> = ({
  label,
  children,
  name,
  control,
  required = false,
  helperText = "",
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <FormControl
        variant="outlined"
        error={!!error}
        required={required}
        fullWidth
      >
        {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
        <InputMUI id={name} label={label} {...field} {...rest} />
        {children}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);

export default Input;
