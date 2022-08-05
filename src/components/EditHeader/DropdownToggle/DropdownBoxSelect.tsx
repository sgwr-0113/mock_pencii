import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const DropdownBoxSelect: React.FC = () => {
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
        value="button"
        aria-label="button"
        sx={{ border: 0 }}
        size="small"
        id="button-button"
        aria-controls={open ? 'button-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onChange={handleClick}
      >
        <SmartButtonIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
      <Menu
        id="button-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'button-button',
        }}
      >
        <MenuItem onClick={handleClose}>ボタンA</MenuItem>
        <MenuItem onClick={handleClose}>ボタンB</MenuItem>
      </Menu>
    </div>
  );
};
