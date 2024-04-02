import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

// import { Provider } from "react-redux";

// import { store } from "./Components/app/store";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-Brain[S]",
  description: "We provide M.Tech Projects , Phd Thesis, Summer Training.",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Provider store={store} >
    <html lang="en">
      
      <body className={inter.className}>
      {/* <Topbar />
      <Navbar /> */}
        {children}</body>
    </html>
    // </Provider>
  );
}
