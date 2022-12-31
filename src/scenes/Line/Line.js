import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from './../global/LineChart/LineChart';

function Line() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Line Chart" subtitle="Simple Line Chart" />
      </Box>
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

export default Line;
