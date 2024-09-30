import React from "react";
import { Box, TextField, IconButton, Chip } from "@mui/material";
import { Controller, useFieldArray, Control } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface ArrayInputProps {
  name: string;
  label: string;
  control: Control<any> | undefined;
}

const ArrayInput: React.FC<ArrayInputProps> = ({ name, label, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const [inputValue, setInputValue] = React.useState("");

  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      append({ id: Date.now().toString(), value: inputValue.trim() });
      setInputValue("");
    }
  };

  return (
    <Box>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
          }
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleAdd}>
              <AddIcon />
            </IconButton>
          ),
        }}
      />
      <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
        {fields.map((item, index) => (
          <Chip
            key={item.id}
            label={(item as any).value}
            onDelete={() => remove(index)}
            deleteIcon={<DeleteIcon />}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ArrayInput;
