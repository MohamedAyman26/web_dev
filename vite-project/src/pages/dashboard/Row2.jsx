import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../pages/line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1.2} mt={1.3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          p={2} // إضافة padding لمزيد من التباعد
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              variant="h6"
              fontWeight={"bold"}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2">
              $59,342.32
            </Typography>
          </Box>

          <IconButton sx={{ mr: 1 }}>
            <DownloadOutlined />
          </IconButton>
        </Stack>

        <Line isDahboard={true} />
      </Paper>

      <Box
        sx={{
          overflow: "auto",
          borderRadius: "4px",
          minWidth: "280px",
          maxHeight: 355,
          flexGrow: 1,
        }}
      >
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item, index) => (
          <Paper
            key={index} // إضافة مفتاح فريد لكل عنصر
            sx={{
              mt: 0.4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 1.2, // إضافة padding لتحسين التصميم
            }}
          >
            <Box>
              <Typography variant="body1">{item.txId}</Typography>
              <Typography variant="body2">{item.user}</Typography>
            </Box>
            <Typography variant="body1">{item.date}</Typography>

            <Typography
              borderRadius={1.4}
              p={1}
              bgcolor={theme.palette.error.main}
              color={theme.palette.getContrastText(theme.palette.error.main)}
              variant="body2"
            >
              ${item.cost}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  );
};

export default Row2;