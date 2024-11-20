"use client";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "@/public/assets/icons";
import { useQueryString } from "@/hooks/useQueryString";

function Search({ label }: { label: string }) {
  const { createQueryString } = useQueryString();

  function handleSearch(term: string) {
    createQueryString("query", term);
  }

  return (
    <TextField
      onChange={(e) => handleSearch(e.target.value)}
      id="outlined-basic"
      label={label}
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;
