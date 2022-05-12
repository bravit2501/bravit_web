import {
  Box,
  Button,
  Grid,
  styled,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { urlFor } from "../../lib/client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetail = ({ products, product, decQty, incQty, qty, onAdd }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [index, setIndex] = useState(0);
  return (
    <Box
      sx={{
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "40px",
      }}
    >
      <Grid container rowSpacing={3} columnSpacing={{ sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={urlFor(product.image && product.image[index])}
            style={{
              width: isMobile ? "auto" : "500px",
              maxHeight: isMobile ? "300px" : "500px",
              objectFit: "contain",
              border: "2px solid #310a10",
            }}
          />
          <Box
            sx={{
              height: isMobile ? "300px" : "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // border: "2px solid #310a10",
              margin: "0px 10px",
            }}
          >
            {product?.image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  margin: "10px auto",
                  border: "2px solid lightgrey",
                }}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              minHeight: "500px",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "column",
              // border: "2px solid #310a10",
              margin: "0px 10px",
            }}
          >
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
                fontWeight: "bold",
              }}
            >
              {product.name}
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
              }}
            >
              Details:
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                color: "#310a10",
                fontWeight: "bold",
              }}
            >
              {product.details}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                //   paddingBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "start",
                fontWeight: "bold",
              }}
            >
              <label style={{ fontSize: "16px" }}>₹</label>
              {product.price}
              <label style={{ fontSize: "16px" }}>.00</label>
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BuyButton onClick={decQty}>
                <RemoveIcon />
              </BuyButton>
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  textAlign: "start",
                  fontWeight: "bold",
                  margin: "auto 15px",
                  fontSize: "26px",
                  color: "#310a10",
                }}
              >
                {qty}
              </Typography>
              <BuyButton onClick={incQty}>
                <AddIcon />
              </BuyButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <BuyButton
                sx={{
                  margin: "25px 0px",
                  padding: "6px 20px",
                  minWidth: "300px",
                }}
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </BuyButton>
              {/* <BuyButton
                sx={{
                  margin: "25px 0px",
                  padding: "6px 20px",
                  minWidth: "300px",
                }}
              >
                Buy Now
              </BuyButton> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;

const BuyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 26,

  //   margin: "25px auto",
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
    borderColor: "#310a10",
    color: "#310a10",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ffffe6",
    borderColor: "#008080",
  },
});
