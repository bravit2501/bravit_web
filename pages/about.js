import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Head from "next/head";
import Footer from "../Components/Footer/Footer";
import FooterLine from "../Components/Footer/FooterLine";
import { useTheme, useMediaQuery } from "@mui/material";
import AboutUs from "../Components/AboutUs/AboutUs";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const activeTab = "/about";
  const selectedValue = 0;
  return (
    <>
      <Head>
        <title>Bravit | ABOUT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <AboutUs isMobile={isMobile} isLaptop={isLaptop} />
      <Footer />
      <FooterLine />
    </>
  );
};

export default About;
