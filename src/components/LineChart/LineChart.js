import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function LineChart({ isDashboard = false,barData }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [givenData, setGivenData] = useState();

  
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const line = data.filter((sec) => sec.sector.length > 0);
        const xLine = line.map((l) => l.sector);
        const yLine = line.map((l) => l.intensity);

        function splitArrayByDuplicates(arr) {
          const result = {};
          for (const elem of arr) {
            if (!result[elem]) {
              result[elem] = [elem];
            } else {
              result[elem].push(elem);
            }
          }
          return Object.values(result);
        }
        const xdata = splitArrayByDuplicates(xLine);
        const ydata = splitArrayByDuplicates(yLine);
        const xx = xdata.map((x) => x[0]);
        const yy = ydata.map((y) => y[0]);
        const spliceYY = yy.slice(0, 18);
        const axis = [
          {
            x: xx[0],
            y: spliceYY[0],
          },
          {
            x: xx[1],
            y: spliceYY[1],
          },
          {
            x: xx[2],
            y: spliceYY[2],
          },
          {
            x: xx[3],
            y: spliceYY[3],
          },
          {
            x: xx[4],
            y: spliceYY[4],
          },
          {
            x: xx[5],
            y: spliceYY[5],
          },
          {
            x: xx[6],
            y: spliceYY[6],
          },
          {
            x: xx[7],
            y: spliceYY[7],
          },
          {
            x: xx[8],
            y: spliceYY[8],
          },
          {
            x: xx[9],
            y: spliceYY[9],
          },
          {
            x: xx[10],
            y: spliceYY[10],
          },
          {
            x: xx[11],
            y: spliceYY[12],
          },
        ];
        const barData = [
          {
            id: "japan",
            color: tokens("dark").greenAccent[500],
            data: axis,
          },
          {
            id: "koan",
            color: tokens("dark").greenAccent[500],
            data: axis,
          },
          {
            id: "lajs",
            color: tokens("dark").greenAccent[500],
            data: axis,
          },
        ];

        console.log(barData);
        console.log(mockLineData);
      });
  }, []);
  return (
    <ResponsiveLine
      data={mockLineData}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickValues: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default LineChart;
