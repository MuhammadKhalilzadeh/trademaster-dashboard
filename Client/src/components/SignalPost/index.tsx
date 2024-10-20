import { Stack, Typography } from "@mui/material";
import Chart from "../../assets/signal-chart.png";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SignalPost = ({ goesUp = true }) => {
  return (
    <Stack
      sx={{
        width: 300,
        border: "1px solid #D2D2D2",
        borderRadius: 1,
        paddingX: 2,
        paddingY: 4,
        gap: 2,
      }}
    >
      <img src={Chart} alt="Chart" />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 13 }}>BTC-USDT</Typography>
        {goesUp ? (
          <ArrowUpwardIcon sx={{ color: "green" }} />
        ) : (
          <ArrowDownwardIcon sx={{ color: "red" }} />
        )}
      </Stack>
      <Typography>Current price: 60,000</Typography>
      <Typography>Target price: 65,000</Typography>
      <Typography>
        Estimated change in percentage: {goesUp ? "+" : "-"}5%
      </Typography>
      <Typography>From Channel One</Typography>
    </Stack>
  );
};

export default SignalPost;
