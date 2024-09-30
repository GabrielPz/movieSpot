"use client";

import { redirect } from "next/navigation";

export default function Login() {
  redirect("/home/");
  return <div />;
}
