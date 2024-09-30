"use client";
import { MainLayout as Layout } from "@/layout/admin-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
