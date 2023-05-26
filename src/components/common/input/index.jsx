import React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

export const InputCommon = ({ sx, label, size, placeholder, name, width, onChange, error, type, value }) => {
  return (
    <FormControl error={error} sx={{ width: `${width || "600px"}`, m: "10px auto", ...sx }}>
      {label ? (
        <label style={{ marginBottom: "10px", fontSize: "15px", color: `${error ? 'red' : ''}`}}>
          {label}:
        </label>
      ) : (
        ""
      )}
      <OutlinedInput
        type={type ?? 'text'}
        placeholder={placeholder || ""}
        size={size ? size : "small"}
        name={name}
        value={value}
        onChange={onChange}
      ></OutlinedInput>
    </FormControl>
  );
};
