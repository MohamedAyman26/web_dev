import { Box, useTheme } from "@mui/material";
import Line from "./Line"; // تأكد من صحة هذا المسار
import Header from "../../Header"; // تأكد من صحة هذا المسار

const LineChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, padding: 2 }}>
      <Header title="Line Chart" subTitle="Simple Line Chart" />
      <Line isDahboard={false} /> {/* يمكنك تمرير خاصية isDahboard إذا لزم الأمر */}
    </Box>
  );
};

export default LineChart;