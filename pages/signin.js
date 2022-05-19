import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { connect } from "react-redux";
import { userLogginSuccess, userLogoutSuccess } from "../redux/userSlice";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FooterLine from "../Components/Footer/FooterLine";

const Signin = ({ userLogginSuccess, userLogoutSuccess }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    shippingAddress: "",
    shippingPinCode: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const SubmitToLogin = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const userCridentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      var user = userCridentials.user;
      console.log(
        "🚀 ~ file: signup.js ~ line 50 ~ SubmitToLogin ~ user",
        user,
      );

      const { uid } = user;
      const userData = {
        email: user.email,
        name: values.name,
        phoneNumber: values.phoneNumber,
        shippingAddress: values.shippingAddress,
        shippingPinCode: values.shippingPinCode,
        userId: uid,
        isOwner: false,
      };
      const result = await setDoc(doc(db, "users", uid), {
        email: user.email,
        name: values.name,
        phoneNumber: values.phoneNumber,
        shippingAddress: values.shippingAddress,
        shippingPinCode: values.shippingPinCode,
        userId: uid,
        isOwner: false,
        createdAt: serverTimestamp(),
      });

      userLogginSuccess(userData);
      toast.success(
        `Welcome ${values.name} your successfully registred at bravite.`,
      );
      setIsLoading(false);
      router.push("/");
    } catch (err) {
      if (err.code == "auth/email-already-in-use") {
        toast.error(`Email address ${values.email} already in use.`);
      } else if (err.code == "auth/invalid-email") {
        toast.error(`Email address ${values.email} is invalid.`);
      } else {
        toast.error(
          "your Registration failed due to some technical error, please try again later.",
        );
      }
      userLogoutSuccess();
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
          Register
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
            {" "}
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
              label="email"
              placeholder="your email"
              type="email"
              onChange={handleChange("email")}
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
            <FormControl
              variant="outlined"
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
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
              onClick={SubmitToLogin}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              SignIn
            </Button>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "30px",
                color: "#310a10",
              }}
            >
              Already have an accout?
            </Typography>
            <Button
              onClick={() => router.push("/login")}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              Login
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
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
