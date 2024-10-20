import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Settings = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [passwordInfo, setPasswordInfo] = useState({
    password: "",
    rePassword: "",
  });

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/67153c85cc03a02a59fd9516"
        );
        setPersonalInfo(response.data);
      } catch (error) {
        console.error("Error fetching personal info:", error);
      }
    };

    fetchPersonalInfo();
  }, []);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSavePersonalInfo = () => {
    console.log("Personal Info:", personalInfo);
    const updatePersonalInfo = async () => {
      try {
        const response = await axios.patch(
          "http://localhost:3000/users/67153c85cc03a02a59fd9516",
          personalInfo
        );
        if (response.status === 200) {
          console.log("Personal info updated successfully:", response);
        }
      } catch (error) {
        console.error("Error updating personal info:", error);
      }
    };

    updatePersonalInfo();
  };

  const handleSavePasswordInfo = () => {
    console.log("Password Info:", passwordInfo);
  };

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
          <TextField
            size="small"
            placeholder="Firstname"
            type="text"
            name="firstname"
            value={personalInfo.firstname}
            onChange={handlePersonalInfoChange}
          />
          <TextField
            size="small"
            placeholder="Lastname"
            type="text"
            name="lastname"
            value={personalInfo.lastname}
            onChange={handlePersonalInfoChange}
          />
          <TextField
            size="small"
            placeholder="Email"
            type="email"
            name="email"
            value={personalInfo.email}
            onChange={handlePersonalInfoChange}
          />
          <TextField
            size="small"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={personalInfo.phone}
            onChange={handlePersonalInfoChange}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleSavePersonalInfo}
          >
            Update personal info
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
          <TextField
            size="small"
            placeholder="Password"
            type="password"
            name="password"
            value={passwordInfo.password}
            onChange={handlePasswordInfoChange}
          />
          <TextField
            size="small"
            placeholder="Re-password"
            type="password"
            name="rePassword"
            value={passwordInfo.rePassword}
            onChange={handlePasswordInfoChange}
          />
          <Button
            variant="contained"
            color="success"
            onClick={handleSavePasswordInfo}
          >
            update password
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Settings;
