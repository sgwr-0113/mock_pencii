import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const DropdownTextboxSelect: React.FC = () => {
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
        value="textbox"
        aria-label="textbox"
        sx={{ border: 0 }}
        size="small"
        id="textbox-button"
        aria-controls={open ? 'textbox-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onChange={handleClick}
      >
        <AddBoxIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
      <Menu
        id="textbox-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'textbox-button',
        }}
      >
        <MenuItem onClick={handleClose}>デザイン1</MenuItem>
        <MenuItem onClick={handleClose}>デザイン2</MenuItem>
        <MenuItem onClick={handleClose}>デザイン3</MenuItem>
      </Menu>
    </div>
  );
};
