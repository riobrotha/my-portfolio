import React from "react";
import Navbar from "../navbar/Navbar";
import BlurBg from "@/components/compliments/BlurBg";
import Head from "next/head";
import Footer from "../Footer";
import { useNotFound } from "@/contexts/NotFoundContext";
import NextNProgress from "nextjs-progressbar";
import { extendTheme, useColorModeValue } from "@chakra-ui/react";
const MainLayout = ({ children }) => {
  const { isNotFound } = useNotFound();

  const chakraTheme = extendTheme();

  const progressBarColor = useColorModeValue(
    chakraTheme.colors.red["500"],
    chakraTheme.colors.purple["600"]
  );

  return (
    <>
      <Head>
        <title>Portfolio - Rio Pambudhi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <NextNProgress
          options={{ showSpinner: false }}
          color={progressBarColor}
          height={4}
        />
        <BlurBg />
        {isNotFound ? null : <Navbar />}
        {children}
        {isNotFound ? null : <Footer />}
      </main>
    </>
  );
};

export default MainLayout;
