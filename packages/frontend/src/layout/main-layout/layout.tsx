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
import { Button } from "@mui/material";

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

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "absolute",
  backgroundImage:
    "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "transparent",
  ...(open && {
    width: `100%`,
    background: "transparent",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const commonTranslate = useTranslate().common;

  const handleRouting = (path: string) => {
    if (path === "/login") {
      localStorage.removeItem("user");
    }
    router.push(path);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          padding: "0 80px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MovieSpot
          </Typography>
          <Button
            onClick={(e) => {
              e.preventDefault(), handleRouting("/home");
            }}
            variant="text"
          >
            <Typography color="white" variant="h6">
              {commonTranslate.home}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </>
  );
}
