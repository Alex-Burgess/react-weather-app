import { useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { LocationContext } from '../lib/locationContext';

export default function SelectLocation() {
  const { location, setLocation } = useContext(LocationContext);

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
    console.log(event);
  };

  return (
    <Box className="max-w-xs m-auto m-0 text-center">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Location"
          onChange={handleChange}
        >
          <MenuItem value={'London'}>London</MenuItem>
          <MenuItem value={'Madrid'}>Madrid</MenuItem>
          <MenuItem value={'New York'}>New York</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
