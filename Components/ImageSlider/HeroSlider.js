import React from "react";
import Carousel from "./Index";

import SL1 from "../../assets/Hero_Slider/Slider_1.png";
import SL2 from "../../assets/Hero_Slider/Slider_2.png";
import SL3 from "../../assets/Hero_Slider/Slider_3.png";
import SL4 from "../../assets/Hero_Slider/Slider_4.png";
import SL5 from "../../assets/Hero_Slider/Slider_5.png";
import SL6 from "../../assets/Hero_Slider/Slider_6.png";
import SL7 from "../../assets/Hero_Slider/Slider_7.png";
import SL8 from "../../assets/Hero_Slider/Slider_8.png";
const HeroSlider = () => {
  const data = [
    {
      image: <SL1 />,
      caption: "san Franciso",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL2 />,
      caption: "san Franciso1",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL3 />,
      caption: "san Franciso2",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL4 />,
      caption: "san Franciso3",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL5 />,
      caption: "san Franciso4",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL6 />,
      caption: "san Franciso5",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL7 />,
      caption: "san Franciso6",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <SL8 />,
      caption: "san Franciso7",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: "white",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <Carousel
        data={data}
        time={5000}
        width="100%"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={false}
        slideNumberStyle={slideNumberStyle}
        captionPosition="center"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="white"
        slideImageFit="contain"
        thumbnails={false}
        thumbnailWidth="100px"
        showNavBtn={true}
        style={{
          textAlign: "center",
          maxWidth: "850px",
          margin: "40px auto",
        }}
      />
    </>
  );
};

export default HeroSlider;
