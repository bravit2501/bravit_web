import { Box, Typography } from "@mui/material";
import { urlFor } from "../../lib/client";

import React from "react";

const OrderData = ({ orderData, isMobile }) => {
  const {
    cartItems,
    razorpay_payment_id,
    totalQuantities,
    createdAt,
    razorpay_order_id,
    totalPrice,
    isDelivered,
  } = orderData;
  return (
    <Box
      sx={{
        minWidth: isMobile ? "auto" : "600px",
        padding: "10px 20px",
      }}
    >
      {!isDelivered ? (
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#AE0000",
          }}
        >
          This Order is Not Delivered yet...
        </Typography>
      ) : (
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#009933",
          }}
        >
          This Order is Delivered Successfully!
        </Typography>
      )}
      {cartItems.length >= 1 &&
        cartItems.map((item) => (
          <Box
            key={item._id}
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "flex-start",
              alignItems: "center",
              borderRadius: "5px",
              minWidth: isMobile ? "auto" : "560px",
              padding: "5px",
              margin: "5px",
              backgroundColor: "#e6e6e6",
              border: "1px solid black",
            }}
            onClick={() => router.push(`/products/${item.slug.current}`)}
          >
            <img
              src={urlFor(item?.image[0])}
              style={{ width: "100px", height: "100px" }}
              alt={item.name}
            />
            <Box sx={{ marginLeft: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  minWidth: isMobile ? "auto" : "400px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: isMobile ? "16px" : "26px",
                    color: "#310a10",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: isMobile ? "16px" : "26px",
                    color: "#310a10",
                  }}
                >
                  <label style={{ fontSize: isMobile ? "12px" : "16px" }}>
                    ₹
                  </label>
                  {item.price}
                  <label style={{ fontSize: isMobile ? "12px" : "16px" }}>
                    .00
                  </label>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minWidth: isMobile ? "auto" : "400px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "start",
                    fontWeight: "bold",
                    fontSize: isMobile ? "16px" : "26px",
                    color: "#310a10",
                  }}
                >
                  Total Quantities:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "start",
                    fontWeight: "bold",
                    margin: "auto 15px",
                    fontSize: isMobile ? "16px" : "26px",
                    color: "#310a10",
                  }}
                >
                  {item.quantity}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          border: " 2px solid #310a10",
          margin: "10px auto",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          Purchase Date:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            margin: isMobile ? "none" : "auto 15px",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          {createdAt.toDate().toDateString()}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          border: " 2px solid #310a10",
          margin: "10px auto",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          Your Payment Id:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            margin: isMobile ? "none" : "auto 15px",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          {razorpay_payment_id}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          border: " 2px solid #310a10",
          margin: "10px auto",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          Your Order Id:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            margin: isMobile ? "none" : "auto 15px",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          {razorpay_order_id}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          border: " 2px solid #310a10",
          margin: "10px auto",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          Total Quantities:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            margin: isMobile ? "none" : "auto 15px",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          {totalQuantities}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          border: " 2px solid #310a10",
          margin: "10px auto",
          borderRadius: "5px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          Total Amount:
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            textAlign: "start",
            fontWeight: "bold",
            margin: isMobile ? "none" : "auto 15px",
            fontSize: isMobile ? "16px" : "26px",
            color: "#310a10",
          }}
        >
          {totalPrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderData;
