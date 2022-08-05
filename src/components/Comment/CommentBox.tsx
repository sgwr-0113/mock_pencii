import React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Styles from './CommentBox.module.scss';
import IconButton from '@mui/material/IconButton/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CommentBox: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={Styles['wrapper']}>
      <div className={Styles['header']}>
        <div className={Styles['header__left']}>
          <AccountCircle fontSize="large" />
        </div>
        <div className={Styles['header__center']}>菅原 悠貴</div>
        <div className={Styles['header__right']}>
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
            <MenuItem onClick={handleClose}>編集</MenuItem>
            <MenuItem onClick={handleClose}>削除</MenuItem>
          </Menu>
        </div>
      </div>
      <div className={Styles['content']}>
        <p className={Styles['content__text']}>コメント内容</p>
      </div>
      <p className={Styles['datetime']}>1秒前</p>
    </div>
  );
};
