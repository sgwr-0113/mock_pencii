import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { Hamburger } from './Hamburger';
import Styles from './Header.module.scss';
import { HeaderIcons } from 'components/Header/HeaderIcons';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  marginLeft: theme.spacing(2),
  width: '40%',
  [theme.breakpoints.down('sm')]: {
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
    },
  },
}));

export const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* スマホ左上ハンバーガー */}
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <Hamburger />
            </IconButton>
          </Box>

          {/* Penciiロゴ */}
          <a href={process.env.PUBLIC_URL}>
            <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', md: 'flex' } }}>
              Pencii
            </Typography>
          </a>

          {/* 記事作成ボタン */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button variant="text" sx={{ color: 'text.secondary', pr: 2, ml: 2 }}>
              <p className={Styles['creation']}>＋新しい記事を作成</p>
            </Button>
          </Box>

          {/* 検索窓 */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="タイトルで検索" inputProps={{ 'aria-label': 'search' }} />
          </Search>

          {/* 中央余白 */}
          <Box sx={{ flexGrow: 1 }} />

          {/* 右上 */}
          <HeaderIcons />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
