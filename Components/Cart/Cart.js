import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import Link from "next/link";
import toast from "react-hot-toast";
import { urlFor } from "../../lib/client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Bravit_round_logo from "../../assets/Bravit_round_logo.png";
import { useRouter } from "next/router";

const Cart = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "xl"));
  const router = useRouter();
  const {
    showCart,
    setShowCart,
    totalQuantities,
    totalPrice,
    cartItems,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  const cartRef = useRef();

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ totalPrice: totalPrice }),
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Bravit Pharmaceuticals Pvt. Ltd.",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for Purchasing",
      image: Bravit_round_logo,
      handler: function (response) {
        console.log(
          "🚀 ~ file: Cart.js ~ line 59 ~ makePayment ~ response",
          response,
        );
        // Validate payment at server - using webhooks is a better idea.
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        router.push("/success");
      },
      prefill: {
        name: "Manu Arora",
        email: "manuarorawork@gmail.com",
        contact: "9999999999",
      },
      notes: {
        address: "vadodata",
        name: "Abc",
        email: "abc@gmail.com",
        phone: "8154036407",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  return (
    <React.Fragment>
      <Drawer open={showCart} onClose={() => setShowCart(false)} anchor="right">
        <Box ref={cartRef} sx={{ minWidth: isMobile ? "auto" : "500px" }}>
          <Box
            className="HeaderCart"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              minWidth: isMobile ? "auto" : "600px",
            }}
          >
            <IconButton onClick={() => setShowCart(false)}>
              <ArrowBackIcon
                sx={{
                  color: "#310a10",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bolder",
                  fontSize: "26px",
                }}
              />
            </IconButton>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                fontSize: "26px",
                color: "#310a10",
              }}
            >
              Your Cart
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                fontSize: "26px",
                color: "#310a10",
              }}
            >
              {totalQuantities} items
            </Typography>
          </Box>
          {cartItems.length < 1 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20%",
                padding: "10px 20px",
                minWidth: isMobile ? "auto" : "600px",
              }}
            >
              <ShoppingBasketIcon
                sx={{ fontSize: "150px", color: "#310a10" }}
              />
              <Typography
                variant="h5"
                sx={{
                  paddingBottom: "20px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "start",
                  fontWeight: "bold",
                  margin: "auto 0px",
                }}
              >
                Your ShoppingBasket is empty.
              </Typography>
              <Link href="/our_products">
                <BuyButton onClick={() => setShowCart(false)}>
                  Continue Shopping
                </BuyButton>
              </Link>
            </Box>
          )}
          <Box
            sx={{
              minWidth: isMobile ? "auto" : "600px",
              padding: "10px 20px",
            }}
          >
            {cartItems.length >= 1 &&
              cartItems.map((item, index) => (
                <Box
                  key={item._id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: "5px",
                    minWidth: isMobile ? "auto" : "560px",
                    padding: "5px",
                    margin: "5px",
                    backgroundColor: "#e6e6e6",
                    border: "1px solid black",
                  }}
                >
                  <img
                    src={urlFor(item?.image[0])}
                    style={{ width: "100px", height: "100px" }}
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
                          fontSize: "26px",
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
                          fontSize: "26px",
                          color: "#310a10",
                        }}
                      >
                        <label style={{ fontSize: "16px" }}>₹</label>
                        {item.price}
                        <label style={{ fontSize: "16px" }}>.00</label>
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
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <BuyButton
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <RemoveIcon />
                        </BuyButton>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            textAlign: "start",
                            fontWeight: "bold",
                            margin: "auto 15px",
                            fontSize: "26px",
                            color: "#310a10",
                          }}
                        >
                          {item.quantity}
                        </Typography>
                        <BuyButton
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AddIcon />
                        </BuyButton>
                      </Box>
                      <IconButton
                        onClick={() => onRemove(item)}
                        sx={{ right: "0" }}
                      >
                        <DeleteIcon sx={{ color: "#310a10" }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
          </Box>
          <Box
            sx={{
              minWidth: isMobile ? "auto" : "600px",
              padding: "10px 20px",
              bottom: 0,
            }}
          >
            {cartItems.length >= 1 && (
              <>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "auto 15px",
                    fontSize: "26px",
                    color: "#310a10",
                  }}
                >
                  Your Total Amount
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        textAlign: "start",
                        fontWeight: "bold",
                        margin: "auto 15px",
                        fontSize: "26px",
                        color: "#310a10",
                      }}
                    >
                      <label style={{ fontSize: "16px" }}>₹</label>
                      {totalPrice}
                      <label style={{ fontSize: "16px" }}>.00</label>
                    </Typography>
                  </Box>
                  <Box>
                    <BuyButton onClick={makePayment}>Pay Now</BuyButton>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Cart;

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
