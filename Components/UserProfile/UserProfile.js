import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection, getDocs, orderBy } from "firebase/firestore";
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
  console.log(
    "🚀 ~ file: UserProfile.js ~ line 18 ~ UserProfile ~ purchasedItems",
    purchasedItems,
  );
  const { email, name, phoneNumber, userId, shippingAddress, shippingPinCode } =
    userData;

  const fetchUserProfile = async () => {
    const docRef = doc(db, "users", userId);
    const userData = await getDoc(docRef);
    const user = userData.data();
    console.log("🚀 ~ file: dashboard.js ~ line 21 ~ Dashboard ~ user", user);
  };

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
        onClick={fetchUserProfile}
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
        onClick={fetchUserCartItems}
        sx={{
          color: "#310a10",
          border: "2px solid #310a10",
          width: "60%",
          marginBottom: "20px",
        }}
      >
        My Purchases
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
                    {/* <Typography>Your Products</Typography>
                    {item.data().cartItems.map((item, index) => {
                      return (
                        <Typography key={index}>
                          {item.name} X {item.quantity}
                        </Typography>
                      );
                    })} */}
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
