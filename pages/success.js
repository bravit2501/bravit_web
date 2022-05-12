import React, { useEffect } from "react";
import Link from "next/link";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/util";
import {
  Box,
  Button,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities, setShowCart } =
    useStateContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    setShowCart(false);
    runFireworks();
  }, []);

  return (
    <Box
      sx={{
        margin: "auto",
        width: isMobile ? "90%" : "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "800px",
        marginTop: "auto",
        marginBottom: "auto",
      }}
    >
      <ShoppingBasketIcon sx={{ fontSize: "150px", color: "green" }} />
      <Typography
        variant={isMobile ? "h4" : "h2"}
        sx={{
          fontWeight: "bolder",
          padding: isMobile ? "10px 0px 0px 0px" : "40px 0px 0px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "22px" : "60px",
          color: "#310a10",
        }}
      >
        Thanks for shopping with us.
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bolder",
          padding: "20px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "18px" : "30px",
          color: "#310a10",
        }}
      >
        For any query directly contact with us at{" "}
        <a
          href="mailto:bravitpharmaceuticals@gmail.com"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#310a10",
          }}
        >
          orders@bravit.com
        </a>
      </Typography>
      <Link href="/">
        <BuyButton sx={{ fontFamily: "Montserrat, sans-serif" }}>
          Continue Shopping
        </BuyButton>
      </Link>
    </Box>
  );
};

export default Success;

const BuyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,

  //   margin: "25px auto",
  //   padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffff",
  backgroundColor: "#311a10",
  borderColor: "#fff",
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
    backgroundColor: "#fff",
    borderColor: "#310a10",
    color: "#310a10",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
