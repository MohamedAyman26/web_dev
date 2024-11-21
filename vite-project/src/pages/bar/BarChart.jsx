import { Box, useTheme } from "@mui/material";
import Header from "../../Header"; // تأكد من صحة هذا المسار
import Bar from "./Bar"; // تأكد من صحة هذا المسار أيضًا

const BarChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, padding: 2 }}>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;