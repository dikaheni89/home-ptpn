import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: `Selamat Datang Di Website Kami | GeoPalm Dashboard (GPD)`
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (children);
}
