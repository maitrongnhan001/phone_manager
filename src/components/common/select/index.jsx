import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectorCommon = ({label, placeholder, sx, size, name, onChange, menuItem, width, error, initValue }) => {
  const [value, setValue] = React.useState('');

  useEffect(() => {
    setValue(initValue);
  }, [initValue])

  const handleChange = (event) => {
    setValue(event.target.value)
    if(onChange)
      onChange(event)
  };

  return (
      <FormControl error={error} fullWidth sx={{ width: `${width || "600px"}`, m: "10px auto", ...sx }}>
				{
            label ? <label style={{ marginBottom: "10px", fontSize: "15px", color: `${error ? 'red' : ''}` }}>{label}:</label> : ''
        }
        <Select
          displayEmpty
          size={size || 'small'}
          value={value}
          onChange={handleChange}
          inputProps={{ "aria-label": "Without label" }}
          name={name}
          renderValue={
            value != '' ? undefined : () => <span style={{color: '#bebebe'}}>{placeholder}</span>
          }
        >
          {
            menuItem?.map((item, idx) => {
              return (
                <MenuItem key={idx} value={item.value}>{item.label}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
  );
};
