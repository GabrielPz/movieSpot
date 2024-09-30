import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import Box from "@mui/material/Box";
import { IconButton, Toolbar as MuiToolbar, Popover } from "@mui/material";
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
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const handleChangeForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };
  // const [user, setUser] = useState<any>();
  const user = getStorageValue("userData", {});
  // useEffect(() => {
  //   const userFromStorage = getStorageValue("userData", {});
  //   setUser(userFromStorage);
  // }, []);

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
        {user?.token && (
          <Box
            sx={{
              cursor: "pointer",
              borderBottom: showBorder("/my-area") ? "5px solid #e50813" : "",
            }}
            onClick={(e) => {
              e.preventDefault(), handleRouting("/my-area");
            }}
          >
            <Typography color="white" variant="h4">
              Minha Área
            </Typography>
          </Box>
        )}
        {user?.role === "ADMIN" && (
          <Box
            sx={{
              cursor: "pointer",
              borderBottom: showBorder("/admin-panel")
                ? "5px solid #e50813"
                : "",
            }}
            onClick={(e) => {
              e.preventDefault(), handleRouting("/admin-panel");
            }}
          >
            <Typography color="white" variant="h4">
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
