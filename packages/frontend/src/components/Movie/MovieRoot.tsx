import { Movie } from "@/entities/api-models";
import { Card, SxProps } from "@mui/material";
import { ReactNode, useState } from "react";
import { Slide } from "../Slider";
import { useRouter } from "next/navigation";
import { MovieData } from "@/services/movies";

interface MovieRootProps {
  children: ReactNode;
  sx?: SxProps;
  movie: MovieData;
  fallbackId?: string;
}

export const MovieRoot = ({
  children,
  sx,
  movie,
  fallbackId = "",
}: MovieRootProps) => {
  const router = useRouter();
  const handleRouteChange = (path: string) => {
    router.push(path);
  };

  return (
    <Card
      onClick={() =>
        handleRouteChange(`/detailed-movie?id=${movie?.id || fallbackId}`)
      }
      sx={{
        width: "430px",
        height: "300px",
        transition: "0.5s",
        "&:hover": {
          cursor: "pointer",
          borderLeft: "5px solid #e50813",
          transform:
            "scale3d(1.1, 1.1, 1) translate3d(6%, 0, 0) perspective(31.25em)",
          boxShadow: "0px 0px 0.75em rgba(0, 0, 0, 0.9)",
        },
        backgroundImage: `url(${movie.imageUrl})`,
        backgroundRepeat: "no-repeat", // Adiciona esta linha para evitar repetição
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: "2rem",
        alignItems: "flex-start",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 20, 0.4) 50%, rgba(83, 100, 141, 0) 100%)",
          zIndex: 1,
        },
        "::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0)", // Ajuste a opacidade conforme necessário
          zIndex: 1,
        },
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
