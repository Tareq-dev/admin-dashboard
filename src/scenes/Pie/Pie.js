import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "./../global/PieChart/PieChart";

function Pie() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      </Box>
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default Pie;
