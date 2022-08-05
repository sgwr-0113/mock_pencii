import * as React from 'react';
import Box from '@mui/material/Box';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

export const EditHeaderRight: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="feedback">
        <RateReviewOutlinedIcon />
      </IconButton>
      <IconButton aria-label="upload">
        <FileUploadOutlinedIcon />
      </IconButton>
      <IconButton aria-label="duplicate">
        <ContentCopyOutlinedIcon />
      </IconButton>
      <IconButton aria-label="save">
        <SaveAltOutlinedIcon />
      </IconButton>

      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreIcon sx={{ color: 'text.secondary' }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>XMLエクスポート</MenuItem>
        <MenuItem onClick={handleClose}>印刷</MenuItem>
      </Menu>
    </>
  );
};
