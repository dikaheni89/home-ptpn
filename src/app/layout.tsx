import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, APP_OWNER } from "@/config/client-constant";
import { CSSReset } from "@chakra-ui/react";;
import {Providers} from "@/app/providers";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  authors: {
    name: "Handika Sutajaba",
    url: "https://handika.online",
  },
  creator: "Handika Sutajaba",
  publisher: APP_OWNER,
  icons: [
    {
      url: `/static/favicon-16x16.png`,
      type: "image/png",
      sizes: "16x16",
      rel: "icon"
    },
    {
      url: `/static/favicon-32x32.png`,
      type: "image/png",
      sizes: "32x32",
      rel: "icon"
    },
    {
      url: `/static/apple-touch-icon.png`,
      type: "image/png",
      sizes: "180x180",
      rel: "apple-touch-icon"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        style={{
          overflowX: "hidden",
          overflowY: "auto",
          height: "auto",
          margin: 0,
          padding: 0,
        }}
      >
        <Providers>
          <CSSReset/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
