import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const CommingSoon = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "80%",
        height: isMobile ? "400px" : "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px auto",
      }}
    >
      <Typography
        variant={isMobile ? "h3" : "h1"}
        sx={{
          fontWeight: "bolder",
          padding: "20px 0px 20px 0px",
          fontFamily: "Montserrat, sans-serif",
          fontSize: isMobile ? "30px" : "60px",
          color: "#310a10",
        }}
      >
        Comming Soon...
      </Typography>
    </Box>
  );
};

export default CommingSoon;
