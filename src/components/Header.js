import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography sx={{ mb: "15px" }} variant="h5" color={colors.greenAccent[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Header;
