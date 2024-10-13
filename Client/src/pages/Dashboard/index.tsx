import { Stack } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Stack
      className="dashboard-layout"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        position: "relative",
        margin: "0 auto",
      }}
    >
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default Dashboard;
