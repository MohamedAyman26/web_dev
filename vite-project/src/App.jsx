import React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom"; // تأكد من تثبيته
import TopBar from "./TopBar"; // تأكد من المسار الصحيح
import Sidebar from "./Sidebar"; // تأكد من المسار الصحيح
import { getDesignTokens } from "./theme"; // تأكد من وجود هذه الدالة

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // إدارة وضع الإضاءة - النهار / الليل
  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") || "light" // استخدم الوضع المحفوظ أو الافتراضي "light"
  );

  // إنشاء الثيم بناءً على الوضع الحالي
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* شريط القوائم العلوية */}
        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        {/* شريط القوائم الجانبية */}
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {/* مخرج التوجيه - لعرض المحتوى المرتبط بالطريق الحالي */}
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}