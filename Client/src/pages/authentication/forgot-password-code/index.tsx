import { Button, Stack, TextField } from "@mui/material";
import Logo from "../../../assets/logo.svg";
import { useState } from "react";
import axios from "axios";

const ForgotPasswordCode = () => {
  const [values, setValues] = useState({
    code: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api.example.com/forgot-password-code",
        values
      );
      console.log("Account created successfully:", response.data);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Stack
      className="reg-page"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          gap: 4,
          width: 360,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 4,
          paddingX: 2,
          borderRadius: 4,
          border: "1px solid #e7e7e7",
        }}
      >
        <img
          src={Logo}
          alt="logo"
          style={{
            width: 100,
            padding: 4,
          }}
        />
        <Stack sx={{ width: "100%", gap: 2 }}>
          <TextField
            size="small"
            placeholder="Enter the code, please"
            type="email"
            name="email"
            value={values.code}
            onChange={handleChange}
          />
        </Stack>
        <Button
          variant="contained"
          color="success"
          size="medium"
          sx={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
};

export default ForgotPasswordCode;
