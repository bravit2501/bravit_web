import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Triangle } from "react-loader-spinner";
import UserData from "./UserData";
import OrderData from "./OrderData";

const OrderDetails = ({
  isMobile,
  orderData,
  isLoading,
  isOwner,
  userData,
  markProductDelivered,
}) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          width: isMobile ? "80%" : "60%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: isMobile ? "300px" : "600px",
        }}
      >
        <Triangle color="#310a10" height={80} width={80} />
      </Box>
    );
  }
  return (
    <>
      <Box
        sx={{
          width: isMobile ? "80%" : "60%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {orderData && <OrderData orderData={orderData} isMobile={isMobile} />}
        {userData && isOwner && (
          <UserData userData={userData} isMobile={isMobile} />
        )}
        {isOwner && (
          <Button
            onClick={markProductDelivered}
            sx={{
              color: "#310a10",
              border: "2px solid #310a10",
              width: "60%",
              marginBottom: "20px",
            }}
          >
            Mark as Delivered
          </Button>
        )}
      </Box>
    </>
  );
};

export default OrderDetails;
