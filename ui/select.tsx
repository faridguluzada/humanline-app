"use client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";

import { useQueryString } from "@/hooks/useQueryString";

import { ISelect } from "@/types";

function Select({ label, options, filterField }: ISelect) {
  const { createQueryString, searchParams } = useQueryString();

  const currentFilter = searchParams.get(filterField);

  const handleChange = (term: string | null) => {
    createQueryString(filterField, term);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <MuiSelect
          labelId="select-label"
          id="select"
          value={currentFilter}
          label={label}
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value="all">All {label}</MenuItem>
          {options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}

export default Select;
