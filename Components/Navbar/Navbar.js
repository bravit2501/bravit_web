import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Badge,
  IconButton,
  Button,
  Menu,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileDrawer from "./MobileDrawer";
import { connect } from "react-redux";
import { userLogoutSuccess } from "../../redux/userSlice";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";

// Imgaes
import Logo from "../../assets/logo/bravit_white.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserProfileMenu from "./UserProfileMenu";
import LogoutUser from "../../firebase/actions/logoutUser";
import toast from "react-hot-toast";

const Navbar = ({ activeTab, selectedTab, isLoggedIn, userLogoutSuccess }) => {
  const router = useRouter();
  const [value, setValue] = useState();
  const [profileMenu, setProfileMenu] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const handleOpenProfileMenu = (e) => {
    setProfileMenu(e.currentTarget);
  };
  const handleCloseProfileMenu = () => {
    setProfileMenu(null);
  };
  const handleChange = (e, value) => {
    e.preventDefault();
    setValue(value);
    router.push(value);
  };
  const onClickDashboard = () => {
    router.push("/dashboard");
  };
  const onClickLogout = async () => {
    setProfileMenu(null);
    try {
      LogoutUser(userLogoutSuccess);
      toast.success("successfully logged out");
    } catch (err) {
      toast.error("You are not logged out");
    }
  };
  return (
    <React.Fragment>
      <AppBar
        sx={{ backgroundColor: "#fff", width: "100%", boxShadow: "none" }}
        position="sticky"
        // color="transparent"
      >
        <Toolbar>
          <Link sx={{ cursor: "pointer" }} href="/" passHref>
            <Image src={Logo} alt="RM <CODERZ>" width={120} height={40} />
          </Link>
          {isMatch ? (
            <MobileDrawer />
          ) : (
            <MTabs value={activeTab} onChange={handleChange}>
              <MTab
                icon={<HomeRoundedIcon />}
                iconPosition="start"
                label="HOME"
                value="/"
              />
              <MTab
                icon={<PersonRoundedIcon />}
                iconPosition="start"
                label="ABOUT"
                value="/about"
              />
              <MTab
                icon={<DesignServicesRoundedIcon />}
                iconPosition="start"
                label="OUR PRODUCTS"
                value="/our_products"
              />
              <MTab
                icon={<BookRoundedIcon />}
                iconPosition="start"
                label="BLOG"
                value="/blog"
              />
              <MTab
                icon={<ConnectWithoutContactRoundedIcon />}
                iconPosition="start"
                label="CONTACT US"
                value="/contact_us"
              />
            </MTabs>
          )}
          <IconButton
            aria-label="cart"
            sx={{ color: "#310a10" }}
            onClick={() => setShowCart(true)}
          >
            <StyledBadge badgeContent={totalQuantities}>
              <ShoppingCartIcon color="#310a10" />
            </StyledBadge>
          </IconButton>
          {isLoggedIn ? (
            <>
              <IconButton
                aria-label="cart"
                sx={{ color: "#310a10" }}
                onClick={handleOpenProfileMenu}
              >
                <AccountCircleIcon color="#310a10" />
              </IconButton>
              <Menu
                anchorEl={profileMenu}
                keepMounted
                open={Boolean(profileMenu)}
                onClose={handleCloseProfileMenu}
              >
                <UserProfileMenu
                  onClickLogout={onClickLogout}
                  onClickDashboard={onClickDashboard}
                />
              </Menu>
            </>
          ) : (
            <Button
              variant="outlined"
              startIcon={<LoginIcon />}
              sx={{
                color: "#310a10",
                border: "none",
                ":hover": { color: "#AE0000", border: "none" },
              }}
              onClick={() => router.push("/login")}
            >
              signin
            </Button>
          )}
          <Cart />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = {
  userLogoutSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

const MTabs = styled(Tabs)({
  marginLeft: "auto",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000000",
  },
  "& .MuiTabs-textColor": {},
});

const MTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "#311a10",
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
      color: " #AE0000",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#800000",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#008080",
    },
  }),
);

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "#310a10",
    backgroundColor: "#e6e6e6",
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
