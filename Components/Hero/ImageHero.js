import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const ImageHero = ({ HeroImage, HeroAlt, ImageHeading }) => {
  console.log(
    "🚀 ~ file: ImageHero.js ~ line 6 ~ ImageHero ~ HeroImage",
    HeroImage,
  );
  return (
    <>
      {/* <Box
        sx={{ width: "100%", height: "800px" }}
        className="carousel-container"
      >
        <Image src={HeroImage} alt={HeroAlt} className="HeroImage" />
        <Box
          // sx={{
          //   color: "#f2f2f2",
          //   fontSize: "15px",
          //   padding: "8px 0",
          //   width: "100%",
          //   position: "absolute",
          //   bottom: "50%",
          //   top: "45%",
          //   textAlign: "center",
          //   textShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
          // }}
          className="carousel-caption-center"
        >
          <Typography>{ImageHeading}</Typography>
        </Box>
      </Box> */}
      <Box
        sx={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box>
          <div
            className="carousel-container"
            style={{
              width: "100%",
              height: "500px",
              backgroundColor: "white",
              borderRadius: "15px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              className="carousel-item fade"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#310a10",
              }}
            >
              <img
                src={HeroImage.src}
                alt={HeroAlt}
                className="HeroImage"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className="Hero-center">
                <Typography variant="h5" sx={{ color: "#310a10" }}>
                  {ImageHeading}
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ImageHero;
