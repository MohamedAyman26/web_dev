import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./world_countries"; // تأكد أن هذا يحتوي على بيانات الدول
import { data } from "./data"; // تأكد أن هذا يحتوي على البيانات المناسبة
import Header from "../../Header";

const Geography = () => {
  const theme = useTheme();

  return (
    <Box height="100vh">
      <Header title="Geography" subTitle="Simple Geography Chart" />
      <ResponsiveChoropleth
        data={data}
        features={geo.features} // تأكد من أن geo.features صحيحة
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors={["#f5e4e4", "#ff6b6b", "#d43f3f", "#a83232"]} // عيّن الألوان حسب الرغبة
        domain={[0, 100]} // تأكد من تعديل النطاق بحسب بياناتك
        unknownColor="#666666"
        label="properties.name" // تأكد من أن هذا يتوافق مع بياناتك
        valueFormat=".2s"
        projectionScale={150}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        onClick={function (feature) {
          // معالجة النقر على الخريطة هنا
          console.log(feature);
        }}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
              },
            },
            legend: {
              text: {
                fill: theme.palette.text.primary,
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.text.secondary,
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.text.primary,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            },
          },
        }}
      />
    </Box>
  );
};

export default Geography;