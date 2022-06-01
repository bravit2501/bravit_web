import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function OrderTable({ tableData, router, userId, isOwner }) {
  const {
    razorpay_order_id,
    totalPrice,
    createdAt,
    totalQuantities,
    razorpay_payment_id,
    isDelivered,
  } = tableData;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Order ID
            </TableCell>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              Total
            </TableCell>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              Total Quantity
            </TableCell>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={razorpay_order_id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              cursor: "pointer",
            }}
            onClick={() =>
              isOwner
                ? router.push(
                    `/order/${tableData.userId}/${razorpay_payment_id}`,
                  )
                : router.push(`/order/${userId}/${razorpay_payment_id}`)
            }
          >
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              component="th"
              scope="row"
            >
              {razorpay_order_id}
            </TableCell>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              {totalPrice} for {totalQuantities} items
            </TableCell>
            {/* <TableCell sx={{color: "#310a10",}} align="right"></TableCell> */}
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              {createdAt.toDate().toDateString()}
            </TableCell>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
              }}
              align="right"
            >
              {tableData.isDelivered ? "Delivered" : "Processing"}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
