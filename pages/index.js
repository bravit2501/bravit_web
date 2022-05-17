import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import OurVision from "../Components/OurMission/OurVision";
import Content from "../Components/Hero/Content";
import Footer from "../Components/Footer/Footer";
import FooterLine from "../Components/Footer/FooterLine";
import OurMissionSlider from "../Components/ImageSlider/OurMissionSlider";
import HeroSlider from "../Components/ImageSlider/HeroSlider";
import HomeHero from "../Components/Hero/HomeHero";
import { useTheme, useMediaQuery } from "@mui/material";

//Hero Slider Images

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const activeTab = "/";
  const selectedValue = 0;
  console.log(NEXT_PUBLIC_SANITY_TOKEN);
  return (
    <>
      <Head>
        <title>Bravit Pharmaceuticals Pvt. Ltd.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activeTab={activeTab} selectedValue={selectedValue} />
      <HomeHero isMobile={isMobile} isLaptop={isLaptop} />
      <Hero isMobile={isMobile} isLaptop={isLaptop} />
      <OurVision isMobile={isMobile} isLaptop={isLaptop} />
      <OurMissionSlider isMobile={isMobile} isLaptop={isLaptop} />
      <Content isMobile={isMobile} isLaptop={isLaptop} />
      <Footer />
      <FooterLine />
    </>
  );
}
