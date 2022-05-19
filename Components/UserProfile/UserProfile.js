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
  Card,
  CardContent,
} from "@mui/material";

const UserProfile = ({ userData }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [orderData, setOrderData] = useState([]);
  console.log(
    "🚀 ~ file: UserProfile.js ~ line 31 ~ UserProfile ~ orderData",
    orderData,
  );
  purchasedItems?.reverse();
  console.log(
    "🚀 ~ file: UserProfile.js ~ line 18 ~ UserProfile ~ purchasedItems",
    purchasedItems,
  );
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
    console.log(
      "🚀 ~ file: UserProfile.js ~ line 31 ~ fetchUserCartItems ~ querySnapshot",
      querySnapshot.docs,
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
            width: isMobile ? "80%" : "60%",
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
          {purchasedItems?.map((item) => {
            console.log(
              "🚀 ~ file: UserProfile.js ~ line 214 ~ {purchasedItems?.map ~ item",
              item.data(),
            );
            return (
              <>
                <Card
                  key={item.data().razorpay_order_id}
                  sx={{
                    backgroundColor: "#e6e6e6",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    router.push(
                      `/order/${userId}/${item.data().razorpay_payment_id}`,
                    )
                  }
                >
                  <CardContent>
                    <Typography>
                      Order Id: {item.data().razorpay_order_id}
                    </Typography>
                    <Typography>
                      Total Price: {item.data().totalPrice}
                    </Typography>
                    <Typography>
                      Purchase Date:{" "}
                      {item.data().createdAt.toDate().toDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Box>
      )}
      {orderData.length > 0 && (
        <Box
          sx={{
            width: isMobile ? "80%" : "60%",
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
          {orderData.map((item, i) => {
            return (
              <>
                <Card
                  key={item.userId}
                  sx={{
                    backgroundColor: "#e6e6e6",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    router.push(
                      `/order/${item.userId}/${item.razorpay_payment_id}`,
                    )
                  }
                >
                  <CardContent>
                    <Typography>Order Id: {item.razorpay_order_id}</Typography>
                    <Typography>
                      Purchase Date: {item.createdAt.toDate().toDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
export default UserProfile;
