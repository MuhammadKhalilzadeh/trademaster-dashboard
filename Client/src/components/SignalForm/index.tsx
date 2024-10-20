import { useState } from "react";
import {
  Button,
  Checkbox,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const SignalForm = () => {
  const [checked, setChecked] = useState<string | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<string>("");

  const handleChannelChange = (event: SelectChangeEvent<string>) => {
    setSelectedChannel(event.target.value as string);
  };

  return (
    <Stack
      className="signal-form"
      sx={{
        width: 400,
        border: "1px solid #D2D2D2",
        borderRadius: 1,
        paddingX: 2,
        paddingY: 4,
        gap: 3,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <TextField
            size="small"
            sx={{ width: 110, height: 40 }}
            placeholder="BTC"
          />
          <TextField
            size="small"
            sx={{ width: 110, height: 40 }}
            placeholder="USDT"
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <Checkbox
            color="success"
            checked={checked === "up"}
            onChange={() => setChecked("up")}
          />
          <Checkbox
            color="error"
            checked={checked === "down"}
            onChange={() => setChecked("down")}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <TextField
          size="small"
          sx={{ height: 40, width: "100%" }}
          placeholder="Current price"
        />
        <TextField
          size="small"
          sx={{ height: 40, width: "100%" }}
          placeholder="Target price"
        />
      </Stack>
      <Typography sx={{ fontSize: 13 }}>Estimated change is 15%</Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Select
          sx={{ width: "100%", height: 40 }}
          displayEmpty
          value={selectedChannel}
          onChange={handleChannelChange}
        >
          <MenuItem value="">Select Channel</MenuItem>
          <MenuItem value={"Channel One"}>Channel One</MenuItem>
          <MenuItem value={"Channel Two"}>Channel Two</MenuItem>
        </Select>
        <Button
          sx={{ height: 40, width: 80 }}
          variant="contained"
          color="success"
        >
          Share
        </Button>
      </Stack>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ height: 40, width: "100%" }}
      >
        Upload files
        <input
          type="file"
          onChange={(event) => console.log(event.target.files)}
          multiple
          style={{
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            bottom: 0,
            left: 0,
            whiteSpace: "nowrap",
            width: 1,
            boxShadow: "none",
          }}
        />
      </Button>
    </Stack>
  );
};

export default SignalForm;
