import { Stack, Typography } from "@mui/material";
import SignalForm from "../../components/SignalForm";

const Signals = () => {
  return (
    <Stack sx={{ gap: 4 }}>
      <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
        Signal Posts
      </Typography>
      <Stack>
        <Stack className="signal-post-form">
          <SignalForm />
        </Stack>
        <Stack className="signal-posts-list"></Stack>
      </Stack>
    </Stack>
  );
};

export default Signals;
