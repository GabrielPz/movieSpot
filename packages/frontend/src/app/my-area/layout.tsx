"use client";
import { MainLayout as Layout } from "@/layout/main-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
