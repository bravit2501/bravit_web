import {
  Box,
  Grid,
  TextField,
  Typography,
  styled,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeroImage from "../../assets/Bravit_Hero.png";
import Image from "next/image";
import toast from "react-hot-toast";

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_ii2crqi", form.current, "zrUljJTYPYx0KfMI5")
      .then(
        (result) => {
          toast.success("Mail sent successfully");
        },
        (error) => {
          toast.error("Mail Sending Failed, Try again later");
        },
      );
  };
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "500px",
        padding: "30px 0px",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              width: "80%",
              margin: "auto",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "auto 0px",
            }}
          >
            <Image src={HeroImage} alt="Hero Image" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "30px" : "60px",
                color: "#310a10",
              }}
            >
              {`<ContactForm>`}
            </Typography>
            <form ref={form} onSubmit={handleSubmit}>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="First Name"
                  name="First_Name"
                  defaultValue=""
                  variant="filled"
                  sx={{ width: isMobile ? "100%" : "49%", marginRight: "2%" }}
                />
                <FormTextField
                  required
                  id="filled-required"
                  label="Last Name"
                  name="Last_Name"
                  defaultValue=""
                  variant="filled"
                  sx={{ width: isMobile ? "100%" : "49%" }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="Email"
                  name="Email"
                  defaultValue=""
                  fullWidth={true}
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  required
                  id="filled-required"
                  label="Phone Number"
                  name="Phone_Number"
                  defaultValue=""
                  variant="filled"
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <FormTextField
                  multiline
                  required
                  rows={4}
                  id="filled-required"
                  label="Subject"
                  name="Subject"
                  defaultValue=""
                  variant="filled"
                  fullWidth={true}
                  underlined="false"
                />
              </Grid>
              <DetailServicesButton
                variant="outlined"
                fullWidth={true}
                type="submit"
              >
                Send Email
              </DetailServicesButton>
            </form>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                padding: "20px 0px 20px 0px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "30px" : "60px",
                color: "#310a10",
              }}
            >
              {`</ContactForm>`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2704457942027!2d73.22376!3d22.267743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5bf02f817ef%3A0x9cdb2349e0c9874c!2sBravit%20Pharmaceuticals%20Private%20Limited!5e0!3m2!1sen!2sin!4v1652698641113!5m2!1sen!2sin"
        style={{
          border: "2px solid #310a10",
          width: "100%",
          minHeight: "500px",
          margin: "auto",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
};

export default ContactUs;

const DetailServicesButton = styled(Button)({
  textTransform: "none",
  fontSize: 26,
  //   margin: "25px auto",
  padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
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
    borderColor: "#310a10",
    color: "#310a10",
    boxShadow: "none",
  },
});

const FormTextField = styled(TextField)({
  boxShadow: "5px 5px 5px #310a10",
  textTransform: "none",
  fontSize: 26,
  margin: "10px auto",
  //   padding: "6px 20px",
  //   border: "1px solid",
  //   lineHeight: 1.5,
  color: "#310a10",
  backgroundColor: "#e6e6e6",
  borderRadius: "5px",
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
    borderColor: "#310a10",
    color: "#000030",
    boxShadow: "-5px -5px 5px #310a10",
  },
});
