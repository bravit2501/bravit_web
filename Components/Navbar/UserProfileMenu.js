import { AssignmentInd, Logout } from "@mui/icons-material";
import { ListItemText, MenuItem } from "@mui/material";
import React from "react";

const UserProfileMenu = ({ onClickDashboard, onClickLogout }) => {
  return (
    <>
      <MenuItem onClick={onClickDashboard}>
        <AssignmentInd />
        <ListItemText primary="Dashboard" />
      </MenuItem>
      <MenuItem onClick={onClickLogout}>
        <Logout />
        <ListItemText primary="Logout" />
      </MenuItem>
    </>
  );
};

export default UserProfileMenu;
