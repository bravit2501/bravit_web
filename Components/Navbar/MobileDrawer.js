import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

import ListRoundedIcon from "@mui/icons-material/ListRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";

const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
        <List>
          <ListItemButton onClick={() => router.push("/")}>
            <ListItemIcon sx={{ color: "#310a10" }}>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#310a10", fontWieght: "bold" }}>
              HOME
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/about")}>
            <ListItemIcon sx={{ color: "#310a10" }}>
              <PersonRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#310a10", fontWieght: "bold" }}>
              ABOUT US
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/our_products")}>
            <ListItemIcon sx={{ color: "#310a10" }}>
              <DesignServicesRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#310a10", fontWieght: "bold" }}>
              OUR PRODUCTS
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/blog")}>
            <ListItemIcon sx={{ color: "#310a10" }}>
              <BookRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#310a10", fontWieght: "bold" }}>
              BLOG
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => router.push("/contact_us")}>
            <ListItemIcon sx={{ color: "#310a10" }}>
              <ConnectWithoutContactRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{ color: "#310a10", fontWieght: "bold" }}>
              CONTACT US
            </ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#310a10", marginLeft: "auto" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ListRoundedIcon color="#310a10" />
      </IconButton>
    </React.Fragment>
  );
};

export default MobileDrawer;
