import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";
import ShippingRateTable from "../../Components/Policies/ShippingRateTable";

const shipping_policy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const PolicyTitle = "Shipping Policy";
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
            We ensure ease of selling and the best possible customer experience
            and mandate delivery to all customers via our logistics partners and
            deduct the shipping cost from the selling price before making a
            payment to you. Shipping fee is calculated on actual weight or
            volumetric weight, whichever is higher. This is to account for items
            which are lightweight but occupy a lot of shipping space.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Volumetric weight is calculated as below:
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              paddingBottom: "20px",
              fontFamily: "Montserrat, sans-serif",
              color: "#310a10",
              fontWeight: "bold",
            }}
          >
            Volumetric Weight (kilo) = L*B*H (Length x Breadth x Height)/5000
            where LBH are in cm.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            The following rates are exclusive of all taxes.
          </Typography>
          <ShippingRateTable />
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ padding: "20px 0px", fontFamily: "Montserrat, sans-serif" }}
          >
            <label style={{ color: "#310a10", fontWeight: "bold" }}>
              Local:
            </label>{" "}
            Item shipped within a city.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            <label style={{ color: "#310a10", fontWeight: "bold" }}>
              Regional:
            </label>{" "}
            Item shipped within state.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            <label style={{ color: "#310a10", fontWeight: "bold" }}>
              National:
            </label>{" "}
            Item shipped within country.
          </Typography>
        </Box>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

export default shipping_policy;
