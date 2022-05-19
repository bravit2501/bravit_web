import { Box, Typography } from "@mui/material";
import React from "react";

const UserData = ({ userData, isMobile }) => {
  const { email, name, phoneNumber, userId, shippingAddress, shippingPinCode } =
    userData;
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: isMobile ? "10px 0px" : "30px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "60px",
          color: "#310a10",
        }}
      >
        User Details
      </Typography>
      <Box
        sx={{
          width: isMobile ? "80%" : "60%",
          textAlign: "left",
          marginLeft: "auto",
          marginRight: "auto",
          padding: isMobile ? "10px 0px" : "40px 0px",
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            paddingBottom: "20px",
            fontFamily: "Montserrat, sans-serif",
            color: "#310a10",
            fontWeight: "bold",
          }}
        >
          Name: {name}
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
          userId: {userId}
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
          Phone: {phoneNumber}
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
          Email: {email}
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
          Shipping Address: {shippingAddress}
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
          Shipping PinCode: {shippingPinCode}
        </Typography>
      </Box>
    </>
  );
};

export default UserData;
