"use client";

import localFont from "next/font/local";
import { createTheme } from "@mui/material/styles";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const theme = createTheme({
  typography: {
    fontFamily: [geistSans.style.fontFamily, geistMono.style.fontFamily].join(
      ","
    ),
  },
});

export default theme;
