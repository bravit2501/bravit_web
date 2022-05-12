import { Box, Card, Grid, Typography, styled } from "@mui/material";
import React from "react";

const OurVision = ({ isMobile, isLaptop }) => {
  console.log(
    "🚀 ~ file: OurVision.js ~ line 5 ~ OurVision ~ isLaptop",
    isLaptop,
  );
  const ourVisionText = [
    {
      quote:
        "We are to foster growth and promote enduring business tie-ups with our client.",
    },
    {
      quote:
        "Customer responsiveness and commitment is the driving force in the quest for excellence.",
    },
    {
      quote:
        "Effective supply chain management right from sourcing and supplying of material at the required destination of the customer.",
    },
    {
      quote:
        "Believe in standard ethics to maintain client’s satisfaction by fulfilling demands in timely manner.",
    },
    {
      quote:
        "Never compromise with quality of the products and take care of all measures in demand.",
    },
    { quote: "Client's satisfaction is the only parameter of our growth." },
  ];
  return (
    <Box sx={{ maxWidth: "80%", marginLeft: "auto", marginRight: "auto" }}>
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
            padding: isMobile ? "10px 0px" : "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#310a10",
          }}
        >
          OUR VISION
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ sm: 2, md: 3 }}>
        {ourVisionText.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
            <OurVisionCard
              sx={{
                minHeight: isMobile ? "250px" : "350px",
                padding: isMobile ? "10px" : "20px",
                backgroundColor: "#e6e6e6",
                display: "flex",
                justifyContent: "center",
              }}
              key={index}
            >
              <Typography
                variant={isMobile ? "h6" : "h4"}
                sx={{
                  paddingBottom: isMobile ? "0px" : "20px",
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "center",
                  fontWeight: "bold",
                  margin: "auto 0px",
                  fontSize: isLaptop ? "20px" : "26px",
                }}
              >
                {item.quote}
              </Typography>
            </OurVisionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OurVision;

const OurVisionCard = styled(Card)({
  boxShadow: "-10px -10px #310a10",
  textTransform: "none",
  //   fontSize: 26,
  padding: "6px 0px",
  border: "1px solid",
  //   lineHeight: 1.5,
  color: "#000",
  backgroundColor: "#008080",
  borderColor: "#ffffe6",
  transition: "ease-in-out 0.3s",
  "&:hover": {
    backgroundColor: "#310a10",
    borderColor: "#e6e6e6",
    color: "#ffffff",
    boxShadow: "10px 10px #e6e6e6",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
