import { Stack, Typography } from "@mui/material";
import SignalForm from "../../components/SignalForm";
import SignalPost from "../../components/SignalPost";

const Signals = () => {
  return (
    <Stack sx={{ gap: 4, overflow: "hidden" }}>
      <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
        Signal Posts
      </Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Stack className="signal-post-form" sx={{ width: "fit-content" }}>
          <SignalForm />
        </Stack>
        <Stack
          className="signal-posts-list"
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <SignalPost />
          <SignalPost />
          <SignalPost />
          <SignalPost />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Signals;
