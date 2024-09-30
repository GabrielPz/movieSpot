import React, { useState } from "react";
import {
  Stack,
  Typography,
  IconButton,
  Button,
  Box,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Close as CloseIcon, Info } from "@mui/icons-material";

type Props = {
  title: string;
  body: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

const BaseActionModal = ({
  title,
  body,
  open,
  handleClose,
  handleConfirm,
}: Props) => {
  const onClose = () => {
    handleClose();
  };

  return (
    <Dialog
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      maxWidth="sm"
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { md: 4 },
        }}
      >
        <Typography
          variant="h5"
          color="secondary"
          sx={{
            mt: 2,
            px: { md: 4 },
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {title}
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon color="primary" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack mb={4} sx={{ px: { md: 4 } }}>
          {body}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default BaseActionModal;
