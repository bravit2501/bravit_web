import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";
import Navbar from "../../Components/Navbar/Navbar";

const terms_conditions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const PolicyTitle = "Terms & Conditions";
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
            Last updated: 09 May, 2022
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            As you sign-up for a Bravit Pharmaceuticals Private Limited Account
            or by using any Bravit's Services, you are agreeing to be bound by
            the following terms and conditions:
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            As used in these Terms of Service, “we”, “us” and “Bravit” means the
            applicable Bravit Contracting Party.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            The services offered by Bravit Pharmaceuticals Private Limited under
            the Terms of Service include various products and online services by
            enabling you for online purchase in person. Any such services
            offered by Bravit Pharmaceuticals Private Limited are referred to in
            these Terms of Services. Any new features or tools which are added
            to the current Services shall be also subject to the Terms of
            Service. You can review the current version of the Terms of Service
            at any time at{" "}
            <a
              href="http://wwwbravitpharmaceuticals.com."
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#310a10",
                fontWeight: "bold",
              }}
            >
              www.bravitpharmaceuticals.com
            </a>
            . Bravit Pharmaceuticals Private Limited reserves the right to
            update and change the Terms of Service by posting updates and
            changes to the Bravit Pharmaceuticals Private Limited website. You
            are advised to check the Terms of Service from time to time for any
            updates or changes that may impact you. and if you do not accept
            such amendments, you must cease using the services.
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            {`
            You must read and agree with and accept all of the terms and
            conditions contained or expressly referenced in these Terms of
            Service, including Bravit Pharmaceuticals Private Limited’s
            Acceptable Use Policy and Privacy Policy. The Bravit Pharmaceuticals
            Private Limited API License and Terms of Use and the Bravit
            Pharmaceuticals Private Limited Data Processing Addendum before you
            may sign up for a Bravit Pharmaceuticals Private Limited Account or
            use any Bravit Pharmaceuticals Private Limited Service.`}
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{ paddingBottom: "20px", fontFamily: "Montserrat, sans-serif" }}
          >
            Everyday language summaries are provided for convenience only and
            appear in bold under each section, but these summaries are not
            legally binding. Please read the Terms of Service, including any
            document referred to in these Terms of Service, for the complete
            picture of your legal requirements. By using Bravit Pharmaceuticals
            Private Limited or any Bravit Pharmaceuticals Private Limited
            services, you are agreeing to these terms and be sure to
            occasionally check back for updates.
          </Typography>
        </Box>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

export default terms_conditions;
