import * as React from "react";
import {
  styled,
  useTheme,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import GraphicEqOutlinedIcon from "@mui/icons-material/GraphicEqOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Home from "../Home";
import { Link } from "react-router";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const openedDrawerWidth = 240;
const closedDrawerWidth = 40;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isMobile",
})(({ theme, open, isMobile }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: isMobile ? 0 : open ? openedDrawerWidth : closedDrawerWidth,
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.secondary,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${open ? openedDrawerWidth : closedDrawerWidth}px)`,
  marginLeft: open ? openedDrawerWidth : closedDrawerWidth,
  background: theme.palette.background.paper,
  color: theme.palette.text.secondary,
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

export default function PersistentDrawerLeft() {
  const [open, setOpen] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  const currentTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#1E1E1E" : "#fff",
            paper: darkMode ? "#18181B" : "#FAFAFA",
          },
          text: {
            secondary: darkMode ? "#fff" : "#000",
          },
        },
      }),
    [darkMode]
  );

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const menuItems = [
    { text: "Bosh Sahifa", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Kurslar", icon: <DataObjectOutlinedIcon />, path: "/kurslar" },
    { text: "Suralar", icon: <GraphicEqOutlinedIcon />, path: "/suralar" },
    { text: "Duolar", icon: <MusicNoteOutlinedIcon />, path: "/duolar" },
  ];

  const menuItems2 = [
    { text: "Kitoblar", icon: <LibraryBooksOutlinedIcon />, path: "/kitoblar" },
    { text: "Biz Haqmizda", icon: <InfoOutlinedIcon />, path: "/about" },
  ];

  return (
    <ThemeProvider theme={currentTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ width: isMobile ? "100%" : "97.1.1%" }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && !isMobile && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src="https://www.sammi.ac/logo.svg"
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                <span style={{ fontWeight: "bold" }}>Burhan Academy</span>
              </div>
            </Typography>
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={open}
          onClose={isMobile ? handleDrawerClose : undefined}
          sx={{
            flexShrink: 0,
            whiteSpace: "nowrap",
            "& .MuiDrawer-paper": {
              width: open ? openedDrawerWidth : closedDrawerWidth,
              boxSizing: "border-box",
              overflowX: "hidden",
              transition: currentTheme.transitions.create("width", {
                easing: currentTheme.transitions.easing.sharp,
                duration: currentTheme.transitions.duration.standard,
              }),
              backgroundColor: currentTheme.palette.background.paper,
              color: currentTheme.palette.text.secondary,
            },
          }}
        >
          <DrawerHeader>
            {open && (
              <Typography variant="subtitle1" sx={{ pl: 2 }}>
                Menu
              </Typography>
            )}
            {open ? (
              <IconButton onClick={handleDrawerClose}>
                {currentTheme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            ) : (
              <div></div>
            )}
          </DrawerHeader>
          <Divider />
          <List>
            {[...menuItems, ...menuItems2].map(({ text, icon, path }) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Link
                  to={path}
                  style={{
                    color: currentTheme.palette.text.secondary,
                    textDecoration: "none",
                  }}
                >
                  <ListItemButton
                    onClick={isMobile ? handleDrawerClose : undefined}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      justifyContent: open ? "initial" : "center",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: currentTheme.palette.text.secondary,
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      secondary={text}
                      sx={{ opacity: open ? 1 : 0, transition: "opacity 0.3s" }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open} isMobile={isMobile}>
          <DrawerHeader />
          <Typography paragraph>
            <Home darkMode={darkMode} setDarkMode={setDarkMode} />
          </Typography>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
