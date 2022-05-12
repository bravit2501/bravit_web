import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  styled,
  Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import P1 from "../../assets/Hero_Slider/Slider_1.png";
import { urlFor } from "../../lib/client";

const Products = ({ products, isMobile, isLaptop }) => {
  return (
    <Box
      sx={{
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 0px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bolder",
            padding: "40px 0px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? "30px" : "60px",
            color: "#310a10",
          }}
        >
          OUR PRODUCTS
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ sm: 2, md: 3 }}>
        {products.map((item, index) => (
          <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
            <Link href={`/products/${item.slug.current}`}>
              <OurProductCard
                key={index}
                sx={{ minHeight: isLaptop ? "500px" : "none" }}
              >
                <CardMedia
                  component="img"
                  image={urlFor(item.image && item.image[0])}
                  alt={item.name}
                  sx={{
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Box>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: isLaptop ? "column" : "row",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={8}
                        lg={8}
                        xl={8}
                        key={index}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "bold",
                            fontSize: "26px",
                            // color: "#310a10",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: "bold",
                            fontSize: "26px",
                            // color: "#310a10",
                          }}
                        >
                          <label style={{ fontSize: "16px" }}>₹</label>
                          {item.price}
                          <label style={{ fontSize: "16px" }}>.00</label>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={12}
                        lg={12}
                        xl={4}
                        key={index}
                      >
                        <BuyButton>Add to cart</BuyButton>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </OurProductCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;

const OurProductCard = styled(Card)({
  boxShadow: "-10px -10px #310a10",
  textTransform: "none",
  //   fontSize: 26,
  //   padding: "6px 0px",
  border: "2px solid #310a10",
  //   lineHeight: 1.5,
  color: "#310a10",
  backgroundColor: "#e6e6e6",
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

const BuyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,

  // margin: "25px auto",
  //   padding: "6px 20px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "#ffffff",
  backgroundColor: "#311a10",
  borderColor: "#fff",
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
    backgroundColor: "#fff",
    borderColor: "#ffffff",
    color: "#310a10",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
