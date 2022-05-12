import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const Content = ({ isMobile, isLaptop }) => {
  const ContentArr = [
    {
      title: "OUR CONCERN FOR QUALITY",
      description:
        "The entire range that we offer is carefully verified and checked by quality controllers ensuring no scope of any contamination. Apart from this, our products are widely used as quality products.",
    },
    {
      title: "OUR PROFESSIONAL ETHICS",
      description:
        "We have a team of hardworking professionals who have immense industry experience and help us to provide the best quality products to our valuable customers. Besides this, our professionals keep themselves updated with the latest pharmaceutical industry trends.",
    },
    {
      title: "OUR GLOBAL REACH",
      description:
        "With the help of our distribution network, we are able to reach across the world with great ease. Additionally, our advanced shipment facilities enable a prompt and safe delivery of the products.",
    },
  ];
  return (
    <>
      {ContentArr.map((item, index) => (
        <>
          <Box
            sx={{
              maxWidth: "80%",
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              padding: isMobile ? "10px 0px" : "70px 0px",
            }}
            key={index}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "30px" : "45px",
                color: "#310a10",
              }}
            >
              {item.title}
            </Typography>
          </Box>
          <Box
            key={item.title}
            sx={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "30px",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </>
      ))}
    </>
  );
};

export default Content;
