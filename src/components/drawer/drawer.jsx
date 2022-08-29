import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import ListItem from "@mui/material/ListItem";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: 79,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  marginTop: 79,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function MiniDrawer(propes) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const getAllNotes = () => {
    propes.getdrawerAction('allNotes')
  };

  const getAllArchivedNotes = () => {
    propes.getdrawerAction('Archived');
  };

  const getAllTrashedNotes = () => {
    propes.getdrawerAction('trashed');
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={propes.drawerOpen}>
        <List>
          <ListItem button onClick={getAllNotes}>
            <ListItemIcon>
              <LightbulbOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Reminder" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ForwardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="hello" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ForwardOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="to know" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <EditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Edit labels" />
          </ListItem>

          <ListItem button onClick={getAllArchivedNotes}>
            <ListItemIcon>
              <ArchiveOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Archive" />
          </ListItem>

          <ListItem button onClick={getAllTrashedNotes}>
            <ListItemIcon>
              <DeleteOutlineOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
