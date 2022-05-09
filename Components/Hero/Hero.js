import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";

const Hero = () => {
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
          padding: "40px 0px",
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
          ABOUT BRAVIT
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
        >
          Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat (India)
          based company dealing with pharmaceuticals, nutraceutical, health and
          hygiene, food and supplements, trading, import and export.
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
        >
          We assure longer and closer working relationships with our clients and
          supplier not only provide immediate and reliable services but also to
          continually exceed expectations and goals.
        </Typography>
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
        >
          We are able to integrate all these functions with our fruitful
          experience. Our numerous competencies allow us to respond to the needs
          of industries looking for a new market. We look forward to welcome you
          to our company and work to develop and enhance your current business
          with us.
        </Typography>
      </Box>
    </>
  );
};

export default Hero;
