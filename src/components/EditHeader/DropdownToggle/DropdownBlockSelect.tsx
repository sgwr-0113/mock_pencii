import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const DropdownBlockSelect: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ToggleButton
        value="block"
        aria-label="block"
        sx={{ border: 0 }}
        size="small"
        id="block-button"
        aria-controls={open ? 'block-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onChange={handleClick}
      >
        <b style={{ fontSize: '18px', margin: 0 }}>P</b>
        <ArrowDropDownIcon />
      </ToggleButton>
      <Menu
        id="block-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'block-button',
        }}
      >
        <MenuItem onClick={handleClose}>P</MenuItem>
        <MenuItem onClick={handleClose}>H2</MenuItem>
        <MenuItem onClick={handleClose}>H3</MenuItem>
        <MenuItem onClick={handleClose}>H4</MenuItem>
        <MenuItem onClick={handleClose}>H5</MenuItem>
        <MenuItem onClick={handleClose}>H6</MenuItem>
      </Menu>
    </div>
  );
};
