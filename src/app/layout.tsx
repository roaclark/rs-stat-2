import type { Metadata } from "next";
import localFont from "next/font/local";
import _ from "lodash";
import { Divider } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Link from "next/link";
import skills from "../data/skills";

import theme from "./theme";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <nav className="p-12 pt-8 pb-0 max-w-screen-lg mx-auto">
              <div className="flex justify-center gap-x-4 p-2">
                <Link href="/">Overview</Link>•
                <Link href="/quests">Quests</Link>•
                <Link href="/achievements">Achievements</Link>•
                <Link href="/combat">Combat</Link>
              </div>
              <Divider />
              <div className="flex flex-wrap justify-center gap-x-2 p-2 pt-4">
                {_.keys(skills).map((skill, i) => {
                  return (
                    <>
                      {i > 0 ? "•" : undefined}
                      <Link href={`/skills/${skill}`}>
                        {skills[skill].name}
                      </Link>
                    </>
                  );
                })}
              </div>
            </nav>
            <div className="p-8">{children}</div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
