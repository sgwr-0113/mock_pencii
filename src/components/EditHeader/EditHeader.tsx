import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Styles from './EditHeader.module.scss';
import { EditHeaderRight } from './EditHeaderRight';
import { EditIcons } from './EditIcons';
import TextField from '@mui/material/TextField';

interface Props {
  setContentsWidth: () => void;
}

export const EditHeader: React.FC<Props> = (props) => {
  const [deviceType, setDeviceType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDeviceType(event.target.value as string);
  };
  // const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('text');
  //   props.setContentsWidth(e.target.value);
  // };

  return (
    <div className={Styles['wrapper']}>
      <Toolbar>
        {/* 余白 */}
        <Box sx={{ flexGrow: 1 }} />

        {/* フォント編集 */}
        <Box
          sx={{ width: '60%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', overflow: 'hidden' }}
        >
          <EditIcons />
        </Box>

        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 2 }} />

        {/* 記事の横幅 */}
        <Box sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', px: 1 }}>
          <FormControl fullWidth size="small" sx={{ display: { xs: 'none', md: 'block' } }}>
            <InputLabel id="device-width-label">記事の横幅</InputLabel>
            <Select
              labelId="device-width-label"
              id="device-type-select"
              value={deviceType}
              label="device-type"
              onChange={handleChange}
              sx={{ pr: 3, display: { xs: 'none', md: 'block' } }}
              autoWidth
            >
              <MenuItem value="">default</MenuItem>
              <MenuItem value={10}>Google Pixel 6</MenuItem>
              <MenuItem value={20}>iPhone 13 Pro/Pro Max</MenuItem>
              <MenuItem value={30}>iPad Air</MenuItem>
            </Select>
          </FormControl>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}
          >
            <TextField
              id="outlined-number"
              type="number"
              size="small"
              sx={{ maxWidth: 180, mx: 1 }}
              // onChange={handleChangeWidth}
            />
            px
          </Box>
        </Box>

        {/* 右余白 */}
        <Box sx={{ flexGrow: 1 }} />

        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 2, display: { xs: 'none', md: 'flex' } }} />
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            width: 'fit-content',
            color: 'text.secondary',
          }}
        >
          <EditHeaderRight />
        </Box>
      </Toolbar>
    </div>
  );
};
