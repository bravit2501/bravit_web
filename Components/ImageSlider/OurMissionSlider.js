import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Carousel from "./Index";

import OM1 from "../../assets/Our_Mission_Slider/OM_1.png";
import OM2 from "../../assets/Our_Mission_Slider/OM_2.png";
import OM3 from "../../assets/Our_Mission_Slider/OM_3.png";
import OM4 from "../../assets/Our_Mission_Slider/OM_4.png";
import OM5 from "../../assets/Our_Mission_Slider/OM_5.png";
import OM6 from "../../assets/Our_Mission_Slider/OM_6.png";
import OM7 from "../../assets/Our_Mission_Slider/OM_7.png";

const ourMissionSlider = () => {
  const OurMissionData = [
    {
      image: <OM1 />,
      caption: "san Franciso",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM2 />,
      caption: "san Franciso1",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM3 />,
      caption: "san Franciso2",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM4 />,
      caption: "san Franciso3",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM5 />,
      caption: "san Franciso4",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM6 />,
      caption: "san Franciso5",
      description: "Hello Im San Franciso Kuch Din to Bitaye Idhar",
    },
    {
      image: <OM7 />,
      caption: "san Franciso6",
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          maxWidth: "80%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 0px 0px 0px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bolder",
            padding: "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#310a10",
          }}
        >
          OUR MISSION
        </Typography>
      </Box>
      <Carousel
        data={OurMissionData}
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
      {/* <Carousel>
        {OurMissionData.map((item, index) => (
          <Carousel.Item>
            <img
              id={index}
              className="d-block w-100"
              src={item.image.type.src}
              alt={item.image.type.caption}
            />
          </Carousel.Item>
        ))}
      </Carousel> */}
    </>
  );
};

export default ourMissionSlider;
