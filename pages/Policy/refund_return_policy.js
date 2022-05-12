import React from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Return_Policy = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const PolicyTitle = "Refund & Return Policy";
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
            Goods return is a scheme provided by respective sellers directly
            under this policy in terms of which the option of exchange,
            replacement and/ or refund is offered by the respective sellers to
            you. All products listed under a particular category may not have
            the same return policy. For all products, the return/replacement
            policy provided on the product page shall prevail over the general
            return policy.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            The return policy is divided into two parts; do read all sections
            carefully to understand the conditions and cases under which returns
            will be accepted.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            <label style={{ color: "#310a10", fontWeight: "bold" }}>
              Supplements:
            </label>{" "}
            5 days
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "40px", fontFamily: "Montserrat, sans-serif" }}
          >
            <label style={{ color: "#310a10", fontWeight: "bold" }}>
              Health & Hygiene Products:
            </label>{" "}
            7 days
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
            General Rules for a successful Return:
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            In certain cases where the seller is unable to process a replacement
            for any reason whatsoever, a refund will be given.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            During open box deliveries, while accepting your order, if you
            received a different or a damaged product, you will be given a
            refund (on the spot refunds for cash-on-delivery orders). Once you
            have accepted an open box delivery, no return request will be
            processed, except for manufacturing defects. In such cases, this
            category-specific replacement/return general conditions will be
            applicable. In case of online order and payment, we will be
            requiring a video of opening the box as a supportive document to
            make a successful return. Any written complaint will be entertained
            within 3 days of the product delivery for successful return of the
            product.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            In case the product was not delivered and you received a delivery
            confirmation email/SMS, report the issue within 7 days from the date
            of delivery confirmation for the seller to investigate.
          </Typography>
        </Box>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

export default Return_Policy;
