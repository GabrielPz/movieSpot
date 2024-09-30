import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Box, CircularProgress } from "@mui/material";
import { getStorageValue } from "@/utils/local-storage";
import useMountEffect from "@/hooks/use-mount";
import { ReactNode } from "react";

export const RouteGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const memoAuthCheck = useCallback(
    async function authCheck() {
      const userData = getStorageValue("userData", {});
      if (!userData || userData?.role !== "ADMIN") {
        router.push("/home");
      }
    },
    [router]
  );

  useEffect(() => {
    router.events.on("routeChangeComplete", memoAuthCheck);
    return () => {
      router.events.off("routeChangeComplete", memoAuthCheck);
    };
  }, [memoAuthCheck, router.events]);

  useMountEffect(() => {
    memoAuthCheck();
  });

  return children;
};
