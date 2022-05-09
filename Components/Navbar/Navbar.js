import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileDrawer from "./MobileDrawer";

// Imgaes
import Logo from "../../assets/Bravit_White.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

const Navbar = ({ activeTab, selectedTab }) => {
  const router = useRouter();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e, value) => {
    e.preventDefault();
    setValue(value);
    router.push(value);
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
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;

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
