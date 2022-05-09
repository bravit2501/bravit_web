import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import HeroImage from "../../assets/Bravit_Hero.png";

const Hero = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {isMatch ? (
            <>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#310a10" }}
              >
                Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat
                (India) based company dealing with pharmaceuticals,
                nutraceutical, health and hygiene, food and supplements,
                trading, import and export.
              </Typography>
              <Typography variant="h5" sx={{ paddingTop: "25px" }}>
                We assure longer and closer working relationships with our
                clients and supplier not only provide immediate and reliable
                services but also to continually exceed expectations and goals.
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: "#310a10" }}
              >
                Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat
                (India) based company dealing with pharmaceuticals,
                nutraceutical, health and hygiene, food and supplements,
                trading, import and export.
              </Typography>
              <Typography variant="h5" sx={{ paddingTop: "25px" }}>
                We assure longer and closer working relationships with our
                clients and supplier not only provide immediate and reliable
                services but also to continually exceed expectations and goals.
              </Typography>
            </>
          )}
          <HeroButton
            variant="outlined"
            onClick={() => router.push("/our_products")}
          >
            BUY NOW!
          </HeroButton>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Image src={HeroImage} alt="Hero Image" />
        </Grid>
      </Grid>
    </Box>
  );
};

const HeroButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "25px auto",
  padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffff",
  backgroundColor: "#311a10",
  borderColor: "#008080",
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
    backgroundColor: "#000",
    borderColor: "#ffffff",
    color: "#fff",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});

export default Hero;
