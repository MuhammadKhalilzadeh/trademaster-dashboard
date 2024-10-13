import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Logo from "../../assets/logo.svg";
import lightTheme from "../../theme/light";
import ViewTimelineOutlinedIcon from "@mui/icons-material/ViewTimelineOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useNavigate } from "react-router-dom";

const menu = [
  {
    title: "Latest news",
    icon: <ViewTimelineOutlinedIcon />,
    path: "/",
  },
  {
    title: "Signals",
    icon: <SignalCellularAltOutlinedIcon />,
    path: "/signals",
  },
  {
    title: "New post",
    icon: <AddBoxOutlinedIcon />,
    path: "/new-post",
  },
  {
    title: "Memberships",
    icon: <GroupsOutlinedIcon />,
    path: "/memberships",
  },
];

const others = [
  {
    title: "Settings",
    icon: <SettingsOutlinedIcon />,
    path: "/settings",
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Stack
      component={"aside"}
      sx={{
        width: 230,
        minHeight: "100vh",
        gap: "40px",
        boxShadow: lightTheme.boxShadows.primary,
        borderRadius: "0 4px 4px 0",
        padding: 2,
        overflow: "hidden",
      }}
    >
      <Stack sx={lightTheme.logoBoxes.primary}>
        <img src={Logo} alt="logo" />
      </Stack>
      <List component={"nav"} disablePadding>
        {menu.map((item, index) => (
          <ListItemButton
            disableRipple
            key={index}
            onClick={() => navigate(`${item.path}`)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItemButton>
        ))}
      </List>
      <List component={"nav"} disablePadding>
        {others.map((item, index) => (
          <ListItemButton
            disableRipple
            key={index}
            onClick={() => navigate(`${item.path}`)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Stack>
  );
};

export default Sidebar;
