import React from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
const cancellation_policy = () => {
  const PolicyTitle = "Cancellation Policy";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Navbar />
      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
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
          {PolicyTitle}
        </Typography>
        <Box>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Last Updated: 09 May, 2022
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            If the buyer placed an order and cancels it before Bravit could mark
            it ready for delivery and in case where the full amount has already
            been paid buy the buyer, the full amount is refunded to the buyer
            even the tax is automatically reversed. In such a scenario, neither
            do we receive any amount nor do we bear any cost. The same principle
            applies when the order is in Return to Origin. Such cancellation
            effects the business of Bravit. If the cancellation of the product
            is made after marking RFD, the commission fees, as well as allied
            taxes are charged. In addition, even the product cancelled is
            delisted for a week.
          </Typography>
        </Box>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

export default cancellation_policy;
