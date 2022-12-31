import { Box } from "@mui/material";
import React from "react";
import BarChart from "../../components/BarChart/BarChart";
import Header from "../../components/Header";

function Bar() {
  return (
    <Box>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
