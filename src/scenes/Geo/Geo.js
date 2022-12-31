import { Box, useTheme } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import GeoChart from "../global/GeoChart/GeoChart";

function Geo() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Geo Chart" subtitle="Simple Geo Chart" />
      </Box>
      <Box height="75vh" border={`1px solid ${colors.grey[100]}`}>
        <GeoChart />
      </Box>
    </Box>
  );
}

export default Geo;
