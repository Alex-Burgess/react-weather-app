import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLocation() {
  return (
    <Box sx={{ maxWidth: 320 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value="London"
          label="Location"
        >
          <MenuItem value={'London'}>London</MenuItem>
          <MenuItem value={'Madrid'}>Madrid</MenuItem>
          <MenuItem value={'New York'}>New York</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
