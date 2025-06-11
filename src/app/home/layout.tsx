import { Metadata } from "next";
import React from "react";
import { APP_NAME } from "@/config/server-constant";


export const metadata: Metadata = {
  title: `Selamat Datang Di Website Kami | ${APP_NAME}`
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (children);
}
