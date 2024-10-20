import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";

const Settings = () => {
  return (
    <Stack
      className="settings-page"
      sx={{
        paddingX: 2,
        paddingY: 4,
        gap: 2,
      }}
    >
      <Stack
        sx={{
          border: "1px solid #D2D2D2",
          borderRadius: 1,
          padding: 2,
          gap: 2,
        }}
      >
        <Typography variant="h6">Personal Information</Typography>
        <Avatar sx={{ width: 128, height: 128 }} />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <TextField size="small" placeholder="Firstname" type="text" />
          <TextField size="small" placeholder="Lastname" type="text" />
          <TextField size="small" placeholder="Email" type="email" />
          <TextField size="small" placeholder="Phone" type="tel" />
          <Button variant="contained" color="success">
            Save
          </Button>
        </Stack>
      </Stack>
      <Stack
        sx={{
          border: "1px solid #D2D2D2",
          borderRadius: 1,
          padding: 2,
          gap: 2,
        }}
      >
        <Typography variant="h6">Password Management</Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <TextField size="small" placeholder="Password" type="password" />
          <TextField size="small" placeholder="Re-password" type="password" />
          <Button variant="contained" color="success">
            Save
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;
