import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppButton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          position: "fixed",
          bottom: isMobile ? 15 : 45,
          right: isMobile ? 0 : 45,
          zIndex: "99",
        }}
      >
        <a href="https://api.whatsapp.com/send?phone=919824982141">
          <IconButton
            aria-label="WhatsApp"
            sx={{
              color: "#310a10",
              backgroundColor: "#25D366",
              borderRadius: isMobile ? "50px 0px 0px 50px" : "50px",
              border: "2px solid #310a10",
              borderRight: isMobile ? "none" : "2px solid #310a10",
              ":hover": {
                color: "#fff",
                backgroundColor: "#310a10",
                borderColor: "#fff",
              },
            }}
          >
            <WhatsAppIcon sx={{ fontSize: isMobile ? "18px" : "40px" }} />
          </IconButton>
        </a>
        {!isMobile && <Typography>Chat With Us!</Typography>}
      </Box>
    </>
  );
};

export default WhatsAppButton;
