import { Box, Typography } from "@mui/material";
import React from "react";

const DetailPolicy = ({ PolicyTitle, PolicyDescription }) => {
  return (
    <Box>
      <Typography>
        {PolicyTitle}+ Of Bravit Pharmaceuticals Pvt. Ltd.
      </Typography>
      <Box>
        <Typography>{PolicyDescription}</Typography>
      </Box>
    </Box>
  );
};

export default DetailPolicy;
