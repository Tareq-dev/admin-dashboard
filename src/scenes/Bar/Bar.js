import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import BarChart from "../global/BarChart/BarChart";

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
