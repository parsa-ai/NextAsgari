import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu/MainMenu";
import "./globals.css";

const Anjoman = localFont({
  src: [
    { path: "./fonts/Anjoman-Bold.woff", weight: "800" },
    { path: "./fonts/Anjoman-Regular.woff", weight: "500" },
    { path: "./fonts/Anjoman-Light.woff", weight: "300" },
  ],
  variable: "--Anjoman",
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
    <html lang="fa-IR">
      <body className={`${Anjoman.variable} antialiased`}>
        <Header />
        {children}
        <MainMenu/>
      </body>
    </html>
  );
}
