import {
  Box,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../firebase/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

import { connect } from "react-redux";
import { userLogginSuccess, userLogoutSuccess } from "../../redux/userSlice";
import toast from "react-hot-toast";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FooterLine from "../../Components/Footer/FooterLine";

const UpdateProfile = ({ userLogginSuccess }) => {
  const router = useRouter();
  console.log(
    "🚀 ~ file: [userId].js ~ line 23 ~ UpdateProfile ~ router?.query",
    router?.query,
  );
  const { userId: uid } = router?.query;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = React.useState({
    name: "",
    phoneNumber: "",
    shippingAddress: "",
    shippingPinCode: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const SubmitToUpdate = async (event) => {
    event.preventDefault();
    try {
      const userUpdate = doc(db, "users", uid);
      await updateDoc(userUpdate, {
        name: values.name,
        phoneNumber: values.phoneNumber,
        shippingAddress: values.shippingAddress,
        shippingPinCode: values.shippingPinCode,
        updatedAt: serverTimestamp(),
      });
      const docRef = doc(db, "users", uid);
      const userData = await getDoc(docRef);
      const user = userData.data();
      const {
        email,
        name,
        phoneNumber,
        userId,
        shippingAddress,
        shippingPinCode,
        isOwner,
      } = user;
      userLogginSuccess({
        email,
        name,
        phoneNumber,
        userId,
        shippingAddress,
        shippingPinCode,
        isOwner,
      });
      toast.success(`your data has been updated successfully at bravite.`);
      setIsLoading(false);
      router.push("/dashboard");
    } catch (err) {
      console.log(
        "🚀 ~ file: [userId].js ~ line 78 ~ SubmitToUpdate ~ err",
        err,
      );
      toast.error(
        "your Updation failed due to some technical error, please try again later.",
      );
    }
  };
  return (
    <>
      <Navbar />
      <Box
        sx={{
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
          Update Profile
        </Typography>
      </Box>
      <Box
        sx={{
          width: isMobile ? "80%" : "60%",
          margin: "20px auto",
        }}
      >
        <form>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
              required
              id="outlined-required"
              label="name"
              placeholder="your full name"
              type="text"
              onChange={handleChange("name")}
            />
            <TextField
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
              required
              id="outlined-required"
              label="phone number"
              placeholder="your number"
              type="tel"
              onChange={handleChange("phoneNumber")}
            />
            <TextField
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
              required
              id="outlined-required"
              label="Shipping address"
              placeholder="your Current Address"
              multiline
              rows={4}
              type="text"
              onChange={handleChange("shippingAddress")}
            />
            <TextField
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
              required
              id="outlined-required"
              label="Pin Code"
              placeholder="your area Pincode"
              type="text"
              onChange={handleChange("shippingPinCode")}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Button
              onClick={SubmitToUpdate}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              Update Details
            </Button>
            <Button
              onClick={() => router.push("/dashboard")}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              Cancel Update Profile
            </Button>
          </Box>
        </form>
      </Box>
      <Footer />
      <FooterLine />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  userLogginSuccess,
  userLogoutSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
