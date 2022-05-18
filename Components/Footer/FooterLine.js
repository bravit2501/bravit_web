import {
  Box,
  Grid,
  IconButton,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Link from "next/link";

// images
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterLine = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: isMobile ? "10px" : "50px 20px 20px 20px",
        width: "full",
      }}
    >
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "auto 0px",
          alignContent: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: isMobile ? "14px" : "18px",
                  fontWeight: "bold",
                  color: "#310a10",
                }}
              >
                Designed By{" "}
                <Link passhref href="https://www.rmcoderz.com/" target="_blank">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#310a10",
                    }}
                  >
                    RMCoderz.
                  </a>
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                sx={{
                  fontSize: isMobile ? "10px" : "18px",
                  fontWeight: "bold",
                  color: "#310a10",
                }}
              >
                <Link
                  passhref
                  href="https://bravitpharmaceutials.com/"
                  target="_blank"
                >
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "#310a10",
                    }}
                  >
                    Copyright © 2022 Bravit Pharmaceuticals Pvt. Ltd.
                  </a>
                </Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                passhref
                href="https://www.facebook.com/bravit.pharmaceuticals"
                target="_blank"
              >
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="facebook">
                    <FacebookIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link
                passhref
                href="https://www.instagram.com/bravitpharmaceuticalspvtltd/"
                target="_blank"
              >
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="Instagram">
                    <InstagramIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link
                passhref
                href="https://www.linkedin.com/in/bravit-pharmaceuticals-pvt-ltd-9452701ba/"
                target="_blank"
              >
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="LinkedIn">
                    <LinkedInIcon />
                  </SocialButtons>
                </a>
              </Link>
              <Link passhref href="https://twitter.com/BravitP" target="_blank">
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <SocialButtons aria-label="Twitter">
                    <TwitterIcon />
                  </SocialButtons>
                </a>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FooterLine;

const SocialButtons = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "auto 5px",
  padding: "6px 6px",
  border: "1px solid",
  color: "#ffffe6",
  backgroundColor: "#310a10",
  borderColor: "#000030",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
    color: "#310a10",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
