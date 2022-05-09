import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, ButtonBase, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useRouter } from "next/router";

// Images & Logo
import Logo from "../../assets/images/main_trans_2.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

const Navbar = ({ activeTab }) => {
  const classes = useStylesAppBar();
  return (
    <AppBar position="top" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Link className="logo" href="/" passHref>
          <Box
            flexDirection="row"
            justifyContent="flex-start"
            display="flex"
            alignItems="center"
            className={classes.webLogoBox}
          >
            <Image src={Logo} alt="RM <CODERZ>" width={250} height={50} />
          </Box>
        </Link>
        <nav className={classes.nav}>
          <Link className="HomeLink" href="/" activeclassName="active" passHref>
            <Box className={classes.navbox}>
              <ButtonBase
                className={clsx(activeTab === "Home" ? classes.selected : null)}
              >
                <HomeRoundedIcon />
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{ marginLeft: 8 }}
                >
                  Home
                </Typography>{" "}
              </ButtonBase>
            </Box>
          </Link>
          <Link
            className="AboutLink"
            href="/about"
            activeclassName="active"
            passHref
          >
            <Box className={classes.navbox}>
              <ButtonBase
                className={clsx(
                  activeTab === "AboutUs" ? classes.selected : null,
                )}
              >
                <PersonRoundedIcon />
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{ marginLeft: 8 }}
                >
                  About Us
                </Typography>
              </ButtonBase>
            </Box>
          </Link>
          <Link
            className="ServicesLink"
            href="/service"
            activeclassName="active"
            passHref
          >
            <Box className={classes.navbox}>
              <ButtonBase
                className={clsx(
                  activeTab === "Services" ? classes.selected : null,
                )}
              >
                <DesignServicesRoundedIcon />
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{ marginLeft: 8 }}
                >
                  Services
                </Typography>
              </ButtonBase>{" "}
            </Box>
          </Link>
          <Link
            className="BlogLink"
            href="/blog"
            activeclassName="active"
            passHref
          >
            <Box className={classes.navbox}>
              <ButtonBase
                className={clsx(activeTab === "Blog" ? classes.selected : null)}
              >
                <BookRoundedIcon />
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{ marginLeft: 8 }}
                >
                  Blog
                </Typography>
              </ButtonBase>
            </Box>
          </Link>
          <Link
            className="ContactUsLink"
            href="/contact_us"
            activeclassName="active"
            passHref
          >
            <Box className={classes.navbox}>
              <ButtonBase
                className={clsx(
                  activeTab === "Contact US" ? classes.selected : null,
                )}
              >
                <ConnectWithoutContactRoundedIcon />
                <Typography
                  variant="subtitle1"
                  component="h2"
                  style={{ marginLeft: 8 }}
                >
                  Contact US
                </Typography>
              </ButtonBase>
            </Box>
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

const useStylesAppBar = makeStyles((theme) => ({
  toolbar: {
    flex: 1,
    justifyContent: "space-between",
    maxWidth: "80%",
  },
  appBar: {
    backgroundColor: theme.main.darkgreen,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  webLogoBox: {
    cursor: "pointer",
  },
  logo: {
    height: 50,
    width: 100,
  },
  nav: {
    display: "flex",
    flexDirection: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  navbox: {
    display: "flex",
    alignItems: "center",
    marginLeft: 20,
  },
  selected: {
    color: theme.main.darkblue,
  },
}));

export default Navbar;
