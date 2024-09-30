"use client";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  IconButton,
  Toolbar as MuiToolbar,
  Popover,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { usePathname, useRouter } from "next/navigation";
import { Button, Stack } from "@mui/material";
import { LoginForm, RegisterForm } from "@/components/forms";
import { useEffect, useState } from "react";
import {
  getStorageValue,
  removeFromStorage,
  useLocalStorage,
} from "@/utils/local-storage";
import { toast } from "react-toastify";

export const Toolbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= theme.breakpoints.values.sm);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.values.sm]);

  const handleChangeForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };
  const [user, setUser] = useState<any>();
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

  useEffect(() => {
    const user = getStorageValue("userData", {});
    setUser(user);
  }, []);

  return (
    <MuiToolbar
      sx={{
        width: "100%",
      }}
    >
      <Stack direction="row" spacing={2} width="100%">
        <Typography
          noWrap
          variant={isMobile ? "h6" : "h3"}
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
            e.preventDefault();
            handleRouting("/home");
          }}
        >
          <Typography color="white" variant={isMobile ? "h6" : "h4"}>
            Home
          </Typography>
        </Box>
        {user?.role === "ADMIN" && (
          <Box
            sx={{
              cursor: "pointer",
              borderBottom: showBorder("/admin") ? "5px solid #e50813" : "",
            }}
            onClick={(e) => {
              e.preventDefault();
              handleRouting("/admin");
            }}
          >
            <Typography color="white" variant={isMobile ? "h6" : "h4"}>
              Painel Admin
            </Typography>
          </Box>
        )}
      </Stack>
      <IconButton
        sx={{
          color: "white",
        }}
        onMouseEnter={handlePopoverOpen}
      >
        <AccountCircleIcon fontSize={isMobile ? "medium" : "large"} />
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
        {!!user?.token ? (
          <Box
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
            <Typography variant="h4" color="white">
              Olá, {user?.name || ""}
            </Typography>
            <Typography variant="h6" color="white">
              Aproveite os melhores filmes!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={(e) => {
                e.preventDefault();
                removeFromStorage("userData");
                handleRouting("/home");
                window.location.reload();
              }}
            >
              Sair
            </Button>
          </Box>
        ) : showRegisterForm ? (
          <RegisterForm handleChangeForm={handleChangeForm} />
        ) : (
          <LoginForm handleChangeForm={handleChangeForm} />
        )}
      </Popover>
    </MuiToolbar>
  );
};
