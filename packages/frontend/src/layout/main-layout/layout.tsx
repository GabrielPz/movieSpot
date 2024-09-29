import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { usePathname, useRouter } from "next/navigation";
import { useTranslate } from "@/hooks/use-translate";
import { Button, Stack } from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundImage:
    "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
  transition: theme.transitions.create(["width", "margin", "background"], {
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
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const commonTranslate = useTranslate().common;

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleRouting = (path: string) => {
    if (path === "/login") {
      localStorage.removeItem("user");
    }
    router.push(path);
  };

  const showBorder = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          padding: "0 80px",
          backgroundColor: scrolled ? "rgba(40, 36, 36, 0.7)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <Toolbar>
          <Stack direction="row" spacing={2}>
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
