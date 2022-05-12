import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  styled,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Image
import Logo from "../../assets/logo/bravit_white.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const router = useRouter();

  const handleChange = (e, value) => {
    e.preventDefault();
    router.push(value);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#e6e6e6",
        padding: "50px 20px",
        width: "full",
      }}
    >
      <Box sx={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Link sx={{ cursor: "pointer" }} href="/" passHref>
              <Image
                src={Logo}
                alt="Bravit Pharmaceuticals Pvt. Ltd."
                width={120}
                height={40}
              />
            </Link>
            <Typography
              variant="h5"
              sx={{ fontSize: isLaptop ? "16px" : "20px", paddingTop: "20px" }}
            >
              Bravit Pharmaceuticals Private Limited is a Vadodara, Gujarat
              (India) based company dealing with pharmaceuticals, nutraceutical,
              health and hygiene, food and supplements, trading, import and
              export.
            </Typography>
            <HeroButton
              variant="outlined"
              onClick={() => router.push("/contact_us")}
            >
              Contact Us
            </HeroButton>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Quick Link
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <FTabs
                orientation="vertical"
                onChange={handleChange}
                sx={{
                  marginLeft: isMobile ? "none" : "auto",
                  marginRight: isMobile ? "none" : "auto",
                }}
              >
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label={`Terms & Conditions`}
                  value="/Policy/terms_conditions"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Privacy Policy"
                  value="/Policy/privacy_policy"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Shipping Policy"
                  value="/Policy/shipping_policy"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label={`Refund & Return Policy`}
                  value="/Policy/refund_return_policy"
                />
                <FTab
                  icon={<ArrowRightAltIcon />}
                  iconPosition="start"
                  label="Cancellation Policy"
                  value="/Policy/cancellation_policy"
                />
              </FTabs>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "20px" }}>
                Contact Details
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "left" : "center",
              }}
            >
              <List>
                <Link passHref href="mailto:bravitpharmaceuticals@gmail.com">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <AlternateEmailIcon sx={{ color: "#311a10" }} />
                      </ListItemIcon>
                      <ListItemText>
                        bravitpharmaceuticals@gmail.com
                      </ListItemText>
                    </ListItem>
                  </a>
                </Link>
                <Link passHref href="callto:+91-7226021413">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <LocalPhoneIcon sx={{ color: "#311a10" }} />
                      </ListItemIcon>
                      <ListItemText>+91 72260 21413</ListItemText>
                    </ListItem>
                  </a>
                </Link>
                <Link passHref href="callto:+91-9824982141">
                  <a
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <LocalPhoneIcon sx={{ color: "#311a10" }} />
                      </ListItemIcon>
                      <ListItemText>+91 98249 82141</ListItemText>
                    </ListItem>
                  </a>
                </Link>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;

const FTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#000033",
  },
  "& .MuiTabs-textColor": {},
});

const FTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    padding: "0px",
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: "left",
    // marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
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
      color: "#311a10",
      opacity: 1,
      borderLeft: "2px solid #311a10",
    },
    "&.Mui-selected": {
      color: "#008080",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#008080",
    },
  }),
);

const HeroButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,
  margin: "25px auto",
  padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffff",
  backgroundColor: "#311a10",
  borderColor: "#ffffff",
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
    backgroundColor: "#000",
    borderColor: "#ffffff",
    color: "#fff",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
