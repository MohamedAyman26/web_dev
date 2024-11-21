import { Box, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types'; // استيراد PropTypes

const Header = ({ title, subTitle, isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box mb={isDashboard ? 2 : 4}>
      <Typography
        sx={{
          color: theme.palette.info.light,
          fontWeight: 'bold',
        }}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography variant="body1">{subTitle}</Typography>
    </Box>
  );
};

// إضافة تعريفات PropTypes للمكون
Header.propTypes = {
  title: PropTypes.string.isRequired, // title مطلوب
  subTitle: PropTypes.string, // subTitle غير مطلوب
  isDashboard: PropTypes.bool, // isDashboard غير مطلوب
};

// تعيين القيمة الافتراضية للخصائص
Header.defaultProps = {
  subTitle: '',
  isDashboard: false,
};

export default Header;