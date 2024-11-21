import PropTypes from "prop-types"; // استيراد PropTypes
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

// بيانات الرسم البياني
const data = [
  { year: 2019, Spain: 900, France: 1400, Germany: 1700 },
  { year: 2020, Spain: 1000, France: 1500, Germany: 1800 },
  { year: 2021, Spain: 1100, France: 1600, Germany: 1900 },
  { year: 2022, Spain: 1200, France: 1700, Germany: 2000 },
  { year: 2023, Spain: 1260, France: 1709, Germany: 2080 },
];

const Bar = ({ isDashbord = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashbord ? "300px" : "75vh" }}>
      <ResponsiveBar
        data={data}
        keys={["Spain", "France", "Germany"]}
        indexBy="year"
        theme={{
          textColor: theme.palette.text.primary,
          fontSize: 11,
          // بقية التخصيصات...
        }}
        // بقية الخصائص...
      />
    </Box>
  );
};

// إضافة PropTypes للتحقق من isDashbord
Bar.propTypes = {
  isDashbord: PropTypes.bool,
};

export default Bar;