import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData } from "../../data/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function LineChart({ isDashboard = false, barData }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [givenData, setGivenData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const usa = data.filter((c) => c.country === "United States of America");
        const brazil = data.filter((c) => c.country === "Brazil");
        const India = data.filter((c) => c.country === "India");
        const xLineUsa = usa.map((l) => l.sector);
        const yLineUsa = usa.map((l) => l.intensity);
        const xLinebrazil = brazil.map((l) => l.sector);
        const yLinebrazil = brazil.map((l) => l.intensity);
        const xLineIndia = India.map((l) => l.sector);
        const yLineIndia = India.map((l) => l.intensity);

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
        const xdataUsa = splitArrayByDuplicates(xLineUsa);
        const ydataUsa = splitArrayByDuplicates(yLineUsa);
        const xdatabrazil = splitArrayByDuplicates(xLinebrazil);
        const ydatabrazil = splitArrayByDuplicates(yLinebrazil);
        const xdataIndia = splitArrayByDuplicates(xLineIndia);
        const ydataIndia = splitArrayByDuplicates(yLineIndia);

        const xUsa = xdataUsa.map((x) => x[0]);
        const yUsa = ydataUsa.map((y) => y[0]);
        const xBrazil = xdatabrazil.map((x) => x[0]);
        const yBrazil = ydatabrazil.map((y) => y[0]);
        const xIndia = xdataIndia.map((x) => x[0]);
        const yIndia = ydataIndia.map((y) => y[0]);
        console.log(yIndia)
        console.log(xIndia)
        const axisUsa = [
          {
            x: xUsa[0],
            y: yUsa[0],
          },
          {
            x: xUsa[1],
            y: yUsa[1],
          },
          {
            x: xUsa[2],
            y: yUsa[2],
          },
          {
            x: xUsa[3],
            y: yUsa[3],
          },
          {
            x: xUsa[4],
            y: yUsa[4],
          },
          {
            x: xUsa[5],
            y: yUsa[5],
          },
          {
            x: xUsa[6],
            y: yUsa[6],
          },
          {
            x: xUsa[7],
            y: yUsa[7],
          },
          {
            x: xUsa[8],
            y: yUsa[8],
          },
          {
            x: xUsa[9],
            y: yUsa[9],
          },
          {
            x: xUsa[10],
            y: yUsa[10],
          },
          {
            x: xUsa[11],
            y: yUsa[11],
          },
        ];
        const axisBrazil = [
          {
            x: xBrazil[0],
            y: yBrazil[0],
          },
          {
            x: xBrazil[1],
            y: yBrazil[1],
          },
          {
            x: xBrazil[2],
            y: yBrazil[2],
          },
          {
            x: xBrazil[3],
            y: yBrazil[3],
          },
          {
            x: xBrazil[4],
            y: yBrazil[4],
          },
          {
            x: xBrazil[5],
            y: yBrazil[5],
          },
          {
            x: xBrazil[6],
            y: yBrazil[6],
          },
          {
            x: xBrazil[7],
            y: yBrazil[7],
          },
          {
            x: xBrazil[8],
            y: yBrazil[8],
          },
          {
            x: xBrazil[9],
            y: yBrazil[9],
          },
          {
            x: xBrazil[10],
            y: yBrazil[10],
          },
          {
            x: xBrazil[11],
            y: yBrazil[11],
          },
        ];
        const axisIndia = [
          {
            x: xIndia[0],
            y: yIndia[0],
          },
          {
            x: xIndia[1],
            y: yIndia[1],
          },
          {
            x: xIndia[2],
            y: yIndia[2],
          },
          {
            x: xIndia[3],
            y: yIndia[3],
          },
          {
            x: xIndia[4],
            y: yIndia[4],
          },
          {
            x: xIndia[5],
            y: yIndia[5],
          },
          {
            x: xIndia[6],
            y: yIndia[6],
          },
          {
            x: xIndia[7],
            y: yIndia[7],
          },
          {
            x: xIndia[8],
            y: yIndia[8],
          },
          {
            x: xIndia[9],
            y: yIndia[9],
          },
          {
            x: xIndia[10],
            y: yIndia[10],
          },
          {
            x: xIndia[11],
            y: yIndia[11],
          },
        ];
        const barData = [
          {
            id: "America",
            color: tokens("dark").greenAccent[500],
            data: axisUsa,
          },
          {
            id: "Brazil",
            color: tokens("dark").greenAccent[100],
            data: axisBrazil,
          },
          {
            id: "India",
            color: tokens("dark").primary[500],
            data: axisIndia,
          }
        ];
        setGivenData(barData);
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
