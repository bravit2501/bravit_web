import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

import { connect } from "react-redux";
import { userLogginSuccess, userLogoutSuccess } from "../redux/userSlice";
import toast from "react-hot-toast";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import FooterLine from "../Components/Footer/FooterLine";

const LoginPage = ({ userLogginSuccess, userLogoutSuccess }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showPassword, setshowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };
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
      const userCridentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(
        "🚀 ~ file: login.js ~ line 48 ~ SubmitToLogin ~ userCridentials",
        userCridentials,
      );
      const { uid } = userCridentials.user;
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
      toast.success(`Welcome ${name} your successfully Logged In at bravit.`);
      setIsLoading(false);
      router.push("/");
    } catch (err) {
      if (err.code == "auth/wrong-password") {
        toast.error(`Password is incorrect, try again.`);
      } else if (err.code == "auth/user-not-found") {
        toast.error(`Email address ${values.email} is invalid.`);
      } else if (err.code == "auth/invalid-email") {
        toast.error(`Email address ${values.email} is invalid.`);
      } else {
        toast.error("your Loggin is Failed");
      }
      userLogoutSuccess();
    }
  };

  const ResetPasswordWithEmail = async () => {
    try {
      setIsLoading(true);
      const resetPass = await sendPasswordResetEmail(auth, resetEmail);
      toast.success(
        `Password reset mail has been sent successfully to your ${resetEmail} account`,
      );
      setDialogOpen(false);
      setIsLoading(false);
    } catch (err) {
      if (err.code == "auth/invalid-email") {
        toast.error(`Provided mail is not valid please try again later.`);
      } else if (err.code == "auth/user-not-found") {
        toast.error("Provided mail is not registred.");
      } else {
        toast.error("Reset password is not processed, please try again later.");
      }
      setDialogOpen(false);
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
          Login
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
              required
              id="outlined-required"
              label="email"
              placeholder="your email"
              type="email"
              onChange={handleChange("email")}
              sx={{ width: isMobile ? "100%" : "80%", margin: "20px auto" }}
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
              Login
            </Button>
            <Typography
              variant={isMobile ? "h6" : "h4"}
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "30px",
                paddingBottom: "20px",
                color: "#310a10",
              }}
            >
              Forgot your Password?
            </Typography>
            <Button
              onClick={handleClickOpen}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              Reset Password
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
              Not Registred to Bravit?
            </Typography>
            <Button
              onClick={() => router.push("/signin")}
              sx={{
                color: "#310a10",
                border: "2px solid #310a10",
                width: "60%",
                marginBottom: "20px",
              }}
            >
              SignIn
            </Button>
            <Dialog open={dialogOpen} onClose={handleClose}>
              <DialogTitle>Reset your Password</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter Registred mail for reset Password.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  sx={{
                    color: "#310a10",
                    border: "2px solid #310a10",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={ResetPasswordWithEmail}
                  sx={{
                    color: "#310a10",
                    border: "2px solid #310a10",
                  }}
                >
                  Reset Password
                </Button>
              </DialogActions>
            </Dialog>
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
