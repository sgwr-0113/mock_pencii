import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ToggleButton from '@mui/material/ToggleButton';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const DropdownAlignSelect: React.FC = () => {
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
        value="align"
        aria-label="align"
        sx={{ border: 0 }}
        size="small"
        id="align-button"
        aria-controls={open ? 'align-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onChange={handleClick}
      >
        <FormatAlignLeftIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
      <Menu
        id="align-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'align-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <FormatAlignLeftIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FormatAlignCenterIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FormatAlignRightIcon />
        </MenuItem>
      </Menu>
    </div>
  );
};
