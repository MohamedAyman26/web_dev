import  { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,  } from "react-router-dom"; // تأكد من الاستيراد
import App from "./App.jsx";
import "./index.css";
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Team from './pages/Team/team';
import Contacts from './pages/contacts/Contacts.jsx'

import Form from "./pages/form/Form.jsx";
import Calendar from "./pages/calendar/Calendar.jsx";
import FAQ from "./pages/Faq/Faq.jsx";
import Bar from "./pages/bar/Bar.jsx";
import Pie from "./pie/Pie.jsx";
import Line from "./pages/line/Line.jsx";
import Geography from "./pages/geography/Geography.jsx";
import NotFound from "./pages/notFond/NotFound.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // المكون الأساسي
    children: [
      {
        path: "dashboard", // مسار لوحة التحكم
        element: <Dashboard />,
      },
      {
        path: "Team", // مسار الصفحة الشخصية
        element: <Team />,
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      {
        path: "form",
        element: <Form />
      },
      {
        path: "Calendar",
        element: <Calendar />
      },
      {
        path: "faq",
        element: < FAQ />
      },
      {
        path: "bar",
        element: <Bar />
      },
      {
        path: "pie",
        element: <Pie />

      },
      {
        path: "line",
        element:<Line/>
      },
      {
        path: "geography",
        element:<Geography/>
      },
      {
        path: "",
        element:<NotFound/>,


      }




      // {
      //   path: "settings", // مسار إعدادات
      //   element: <Settings />,
      // },
      // يمكنك إضافة المزيد من المسارات هنا
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);