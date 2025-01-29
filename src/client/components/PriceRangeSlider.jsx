import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function PriceRangeSlider({ minValue = 1, maxValue = 350000 }) {
  const [value, setValue] = React.useState([minValue, maxValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index) => (event) => {
    const newValue = [...value];
    newValue[index] = Number(event.target.value);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        PREÇO
      </Typography>

      <Slider
        value={value}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        valueLabelDisplay="auto"
      />

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography>de</Typography>
        <TextField
          value={value[0]}
          onChange={handleInputChange(0)}
          size="small"
          type="number"
        />
        <Typography>a</Typography>
        <TextField
          value={value[1]}
          onChange={handleInputChange(1)}
          size="small"
          type="number"
        />
      </Box>
    </Box>
  );
}
