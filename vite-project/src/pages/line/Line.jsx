import PropTypes from "prop-types"; // استيراد PropTypes
import { ResponsiveLine } from "@nivo/line";

// بيانات الرسم البياني
const data = [
  {
    id: "japan",
    color: "hsl(205, 70%, 50%)",
    data: [
      { x: "plane", y: 200 },
      { x: "helicopter", y: 100 },
      { x: "boat", y: 50 },
      { x: "train", y: 100 },
      { x: "subway", y: 150 },
    ],
  },
];

const Line = ({ isDahboard = false }) => {
  return (
    <div style={{ height: isDahboard ? "300px" : "400px" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 20, bottom: 60, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", min: "0", max: "200", stacked: false, reverse: false }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Transport",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enablePoints={true}
        pointColor={{ from: "color" }}
        pointBorderColor={{ from: "serieColor" }}
        pointBorderWidth={2}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

// إضافة PropTypes للتحقق من isDahboard
Line.propTypes = {
  isDahboard: PropTypes.bool, // تحقق من أن isDahboard هو نوع boolean
};

export default Line;