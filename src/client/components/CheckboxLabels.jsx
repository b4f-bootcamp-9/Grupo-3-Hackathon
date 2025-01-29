import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxLabels({ options,onChange }) {
  return (
    <FormGroup>
      {options.map((text, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox onChange={(e) => onChange(e.target.checked, text)} />
          }
          label={text}
        />
      ))}
    </FormGroup>
  );
}
