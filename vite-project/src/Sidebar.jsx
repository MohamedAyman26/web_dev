import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'; // تم تصحيح الاستيراد هنا
import Tooltip from '@mui/material/Tooltip'; // تأكد من استيراد Tooltip بشكل صحيح
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';

import {
  HomeOutlined,
  PeopleOutlined as PeopleOutlinedIcon,
  ContactsOutlined as ContactsOutlinedIcon,
  PersonOutlined as PersonOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  PieChartOutlineOutlined as PieChartOutlineOutlinedIcon,
  TimelineOutlined as TimelineOutlinedIcon,
  MapOutlined as MapOutlinedIcon,
} from '@mui/icons-material';

// تعريف عرض الدرج
const drawerWidth = 240;

// تعريف الأنماط للدرج عند الفتح والإغلاق
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `60px`,
  overflowX: 'hidden',
});

// تعريف الدرج
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// تعريف دالة DrawerHeader
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Array1 = [
  { text: 'Dashboard', icon: <HomeOutlined />, path: '/Dashboard' },
  { text: 'Manage Team', icon: <PeopleOutlinedIcon />, path: '/team' },
  { text: 'Contacts Information', icon: <ContactsOutlinedIcon />, path: '/contacts' },
];

const Array2 = [
  { text: 'Profile Form', icon: <PersonOutlinedIcon />, path: '/form' },
  { text: 'Calendar', icon: <CalendarTodayOutlinedIcon />, path: '/calendar' },
  { text: 'FAQ Page', icon: <HelpOutlineOutlinedIcon />, path: '/faq' },
];

const Array3 = [
  { text: 'Bar Chart', icon: <BarChartOutlinedIcon />, path: '/bar' },
  { text: 'Pie Chart', icon: <PieChartOutlineOutlinedIcon />, path: '/pie' },
  { text: 'Line Chart', icon: <TimelineOutlinedIcon />, path: '/line' },
  { text: 'Geography Chart', icon: <MapOutlinedIcon />, path: '/geography' },
];

export default function Sidebar() {
  const theme = useTheme(); // جلب إعدادات theme باستخدام useTheme
  const [open, setOpen] = React.useState(true); // حالة الفتح والإغلاق

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();


  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Avatar
        sx={{
          mx: 'auto',
          width: open ? 88 : 44,
          height: open ? 88 : 44,
          my: 1,
          border: '2px solid grey',
          transition: '0.25s',
        }}
        alt="Remy Sharp"
        src="C:\Users\shahbora2026\Downloads\452560031_1925548254557475_2440590120645084900_n.jpg"
      />
      <Typography
        align="center"
        sx={{ fontSize: open ? 17 : 0, transition: '0.25s' }}
      >
         Mohamed_Ayman26
      </Typography>
      <Typography
        align="center"
        sx={{
          fontSize: open ? 15 : 0,
          transition: '0.25s',
          color: theme.palette.info.main, // تم إصلاح استخدام theme هنا
        }}
      >
        Admin
      </Typography>
      <Divider />

      <List>
            {Array1.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
          <Tooltip title={open ? null : item.text} placement="left">
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,


              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      ))}
      </List>
      <Divider />
      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
               onClick={() => {
                navigate(item.path)
              }
              }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton

               onClick={() => {
                navigate(item.path)
              }
              }
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
