import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const CustomSelect = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl size="small" sx={{ width: "100%" }}>
      <InputLabel>Channel to Share</InputLabel>
      <Select value={value} onChange={handleChange} label={"Channel to Share"}>
        <MenuItem value="Channel One">Channel One</MenuItem>
        <MenuItem value="Channel Two">Channel Two</MenuItem>
        <MenuItem value="Channel Three">Channel Three</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
