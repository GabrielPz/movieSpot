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
  SxProps,
} from "@mui/material";
import { Close as CloseIcon, Info } from "@mui/icons-material";

type Props = {
  title: string;
  body: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  sx?: SxProps;
};

const BaseActionModal = ({
  title,
  body,
  open,
  handleClose,
  handleConfirm,
  sx,
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
    >
      <DialogContent
        sx={{
          height: "720px",
          width: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...sx,
        }}
      >
        <Stack sx={{ px: { md: 4 } }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={3}
          >
            <Typography
              variant="h3"
              color="secondary"
              sx={{
                textAlign: "center",
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon color="primary" />
            </IconButton>
          </Stack>
          {body}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default BaseActionModal;
