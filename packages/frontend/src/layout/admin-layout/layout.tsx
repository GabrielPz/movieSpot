"use client";

import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { DrawerItem } from "@/entities/drawer-itens";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import PeopleIcon from "@mui/icons-material/People";
import PublicIcon from "@mui/icons-material/Public";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslate } from "@/hooks/use-translate";
import { RouteGuard } from "./guard";
import { Stack } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleRouting = (path: string, key: string) => {
    if (key === "logout") {
      localStorage.removeItem("userData");
    }
    router.push(path);
  };

  const drawerItens: DrawerItem[] = [
    {
      icon: PeopleIcon,
      key: "user",
      label: "Usuários",
      route: "/admin",
    },
    {
      icon: ChecklistIcon,
      key: "movies",
      label: "Filmes",
      route: "/admin/movies",
    },

    {
      icon: LogoutIcon,
      key: "logout",
      label: "Sair",
      route: "/home",
    },
  ];

  return (
    <RouteGuard>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "rgba(40, 36, 36, 0.767)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Stack direction="row" spacing={2} width="100%">
            <Typography
              noWrap
              component="div"
              color="secondary.main"
              fontWeight={600}
            >
              MovieSpot
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
              }}
              onClick={(e) => {
                e.preventDefault(), handleRouting("/home", "home");
              }}
            >
              <Typography color="white" variant="h4">
                Home
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                borderBottom: "5px solid #e50813",
              }}
              onClick={(e) => {
                e.preventDefault(), handleRouting("/admin", "user");
              }}
            >
              <Typography color="white" variant="h4">
                Painel Admin
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {drawerItens.map((item, index) => (
            <ListItem
              key={item.key}
              disablePadding
              sx={{ display: "block" }}
              onClick={(_) => {
                handleRouting(item.route, item.key);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color:
                      item.key == "logout" ? "red" : theme.palette.primary.main,
                  }}
                >
                  {<item.icon></item.icon>}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    opacity: open ? 1 : 0,
                    color:
                      item.key == "logout" ? "red" : theme.palette.primary.main,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          {open && (
            <ListItem
              key="logo"
              disablePadding
              onClick={(_) => {
                handleRouting("/home", "home");
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: open ? 25 : "auto",
                left: 0,
                right: 0,
                cursor: "pointer",
              }}
            >
              <Typography variant="h2" color="secondary.main">
                MovieSpot
              </Typography>
            </ListItem>
          )}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundImage: `url(https://www.creativefabrica.com/wp-content/uploads/2023/07/13/Movie-Website-Background-Wallpaper-74463740-1.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginLeft: open ? "240px" : "90px",
          width: open ? "calc(100% - 240px)" : "calc(100% - 100px)",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </RouteGuard>
  );
}
