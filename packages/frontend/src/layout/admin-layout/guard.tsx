"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Box, CircularProgress } from "@mui/material";
import { getStorageValue } from "@/utils/local-storage";
import useMountEffect from "@/hooks/use-mount";
import { ReactNode } from "react";

export const RouteGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const memoAuthCheck = useCallback(
    async function authCheck() {
      const userData = getStorageValue("userData", {});
      if (!userData || userData?.role !== "ADMIN") {
        router.push("/home");
      }
    },
    [pathname]
  );

  useEffect(() => {
    memoAuthCheck();
  }, [memoAuthCheck, pathname]);

  return children;
};
