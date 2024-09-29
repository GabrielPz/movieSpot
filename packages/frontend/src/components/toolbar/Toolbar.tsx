import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { IconButton, Toolbar as MuiToolbar, Popover } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { usePathname, useRouter } from "next/navigation";
import { useTranslate } from "@/hooks/use-translate";
import { Button, Stack } from "@mui/material";
import { LoginForm, RegisterForm } from "@/components/forms";
import { useState } from "react";

export const Toolbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const handleChangeForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };
  const handleRouting = (path: string) => {
    if (path === "/login") {
      localStorage.removeItem("user");
    }
    router.push(path);
  };

  const showBorder = (path: string) => {
    return pathname.includes(path);
  };

  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setShowRegisterForm(false);
  };
  const open = Boolean(anchorEl);

  return (
    <MuiToolbar
      sx={{
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={2} width="100%">
        <Typography
          variant="h3"
          noWrap
          component="div"
          color="secondary.main"
          fontWeight={700}
        >
          MovieSpot
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            borderBottom: showBorder("/home") ? "5px solid #e50813" : "",
          }}
          onClick={(e) => {
            e.preventDefault(), handleRouting("/home");
          }}
        >
          <Typography color="white" variant="h4">
            Home
          </Typography>
        </Box>
        <Box
          sx={{
            cursor: "pointer",
            borderBottom: showBorder("/movies") ? "5px solid #e50813" : "",
          }}
          onClick={(e) => {
            e.preventDefault(), handleRouting("/movies");
          }}
        >
          <Typography color="white" variant="h4">
            Filmes
          </Typography>
        </Box>
      </Stack>
      <IconButton
        sx={{
          color: "white",
        }}
        onMouseEnter={handlePopoverOpen}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>
      <Popover
        id="account-over-popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        disableRestoreFocus
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {showRegisterForm ? (
          <RegisterForm handleChangeForm={handleChangeForm} />
        ) : (
          <LoginForm handleChangeForm={handleChangeForm} />
        )}
      </Popover>
    </MuiToolbar>
  );
};
