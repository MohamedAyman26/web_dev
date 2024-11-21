import { ResponsivePie } from "@nivo/pie";
import PropTypes from "prop-types"; // استيراد PropTypes
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "hsl(107, 70%, 50%)",
  },
  {
    id: "Stylus",
    label: "Stylus",
    value: 543,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "Sass",
    label: "Sass",
    value: 401,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "Haskell",
    label: "Haskell",
    value: 434,
    color: "hsl(172, 70%, 50%)",
  },
  {
    id: "Nue",
    label: "Nue",
    value: 333,
    color: "hsl(219, 70%, 50%)",
  },
];

const Pie = ({ isDashbord = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashbord ? "200px" : "75vh" }}>
      <ResponsivePie
        data={data}
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
              },
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
          },
        }}
        margin={
          isDashbord
            ? { top: 10, right: 0, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashbord ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        enableArcLabels={!isDashbord}
        enableArcLinkLabels={!isDashbord}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={
          isDashbord
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
};

// إضافة PropTypes للتحقق من isDashbord
Pie.propTypes = {
  isDashbord: PropTypes.bool,
};

export default Pie;