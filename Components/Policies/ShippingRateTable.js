import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme, useMediaQuery } from "@mui/material";

function createData(WeightSlab, Local, Regional, National) {
  return { WeightSlab, Local, Regional, National };
}

const rows = [
  createData("0-0.5 Every kg", 50, 65, 85),
  createData("0.5-3 Every kg ", 38, 43, 57),
  createData("3-12  Every kg ", 18, 20, 25),
  createData("> 12  Every kg  ", 14, 16, 21),
];

export default function ShippingRateTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              Weight Slab
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              Local
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              Regional
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#310a10",
                fontWeight: "bolder",
                fontFamily: "Montserrat, sans-serif",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              National
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.WeightSlab}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "#310a10",
                  fontWeight: "bolder",

                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "16px" : "24px",
                }}
              >
                {row.WeightSlab}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#310a10",
                  fontWeight: "bolder",

                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "16px" : "24px",
                }}
              >
                {row.Local}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#310a10",
                  fontWeight: "bolder",

                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "16px" : "24px",
                }}
              >
                {row.Regional}
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: "#310a10",
                  fontWeight: "bolder",

                  fontFamily: "Montserrat, sans-serif",
                  fontSize: isMobile ? "16px" : "24px",
                }}
              >
                {row.National}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
