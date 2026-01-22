import { FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useMemo } from "react";

export default function ProductFilter({filteredProducts,search,Products}) {


  filteredProducts = useMemo(()=>{

  const result = Products.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  return result

 },[search])


  return (
    <Stack sx={{ margin: "50px" }} direction={'row'} spacing={3}>
      <TextField
        label="Search"
        placeholder="search by product name"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={""}
    label="Age"
    onChange={"handleChange"}
  >
    <MenuItem value={10}>Ten</MenuItem>
  </Select>
</FormControl>
    </Stack>
  );
}
