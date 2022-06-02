import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import OrderTable from "./OrderTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UserProfile = ({ userData }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [orderData, setOrderData] = useState([]);
  purchasedItems?.reverse();
  const {
    email,
    name,
    phoneNumber,
    userId,
    shippingAddress,
    shippingPinCode,
    isOwner,
  } = userData;

  const fetchUserCartItems = async () => {
    const querySnapshot = await getDocs(
      collection(db, `users/${userId}/CartItems`),
      orderBy("timestamp", "desc"),
    );
    setPurchasedItems(querySnapshot.docs);
  };

  const fetchOrderData = async () => {
    const orderRef = collection(db, "cartItems");
    const Orders = query(orderRef, where("isDelivered", "==", false));
    onSnapshot(Orders, (snapshot) => {
      let order = [];
      snapshot.docs.forEach((doc) => {
        order.push({ ...doc.data(), id: doc.id });
      });
      setOrderData(order);
    });
  };

  return (
    <Box
      sx={{
        width: isMobile ? "80%" : "60%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: isMobile ? "10px 0px" : "40px 0px",
      }}
    >
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
        User Profile
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
          Email: {email}{" "}
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
      <Button
        onClick={() => router.push(`/user/${userId}`)}
        sx={{
          color: "#310a10",
          border: "2px solid #310a10",
          width: "60%",
          marginBottom: "20px",
        }}
      >
        Update My Profile
      </Button>
      <Button
        onClick={isOwner ? fetchOrderData : fetchUserCartItems}
        sx={{
          color: "#310a10",
          border: "2px solid #310a10",
          width: "60%",
          marginBottom: "20px",
        }}
      >
        {isOwner ? "Show Orders" : "My Purchases"}
      </Button>
      {purchasedItems.length > 0 && (
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
            My Orders
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Total
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Total Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              {purchasedItems?.map((item) => {
                const {
                  razorpay_order_id,
                  totalPrice,
                  createdAt,
                  totalQuantities,
                  razorpay_payment_id,
                  isDelivered,
                } = item.data();
                return (
                  <TableBody>
                    <TableRow
                      key={razorpay_order_id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        router.push(`/order/${userId}/${razorpay_payment_id}`)
                      }
                    >
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        component="th"
                        scope="row"
                      >
                        {razorpay_order_id}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {totalPrice} for {totalQuantities} items
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {createdAt.toDate().toDateString()}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {isDelivered ? "Delivered" : "Processing"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Box>
      )}
      {orderData.length > 0 && (
        <Box
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
            Orders Details
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Total
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Total Quantity
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#310a10",
                      fontWeight: "bolder",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    align="right"
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              {orderData.map((item, i) => {
                const {
                  razorpay_order_id,
                  totalPrice,
                  createdAt,
                  totalQuantities,
                  razorpay_payment_id,
                  isDelivered,
                } = item;
                return (
                  <TableBody>
                    <TableRow
                      key={razorpay_order_id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        router.push(
                          `/order/${item.userId}/${razorpay_payment_id}`,
                        )
                      }
                    >
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        component="th"
                        scope="row"
                      >
                        {razorpay_order_id}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {totalPrice} for {totalQuantities} items
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {createdAt.toDate().toDateString()}
                      </TableCell>
                      <TableCell
                        sx={{
                          color: "#310a10",
                          fontWeight: "bolder",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                        align="right"
                      >
                        {isDelivered ? "Delivered" : "Processing"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};
export default UserProfile;
