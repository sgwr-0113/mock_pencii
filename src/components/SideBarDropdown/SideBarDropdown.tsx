import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  title: string;
  lists: { title: string }[];
}

export const SideBarDropdown: React.FC<Props> = (props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-standard-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {props.lists.map((list: { title: string }, i: number) => (
            <MenuItem key={i} value={i}>
              {list.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
