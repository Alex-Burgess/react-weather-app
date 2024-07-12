import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLocation() {
  const [location, setLocation] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 320 }}>
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
