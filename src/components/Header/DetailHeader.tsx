import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { HeaderIcons } from './HeaderIcons';

export const DetailHeader: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <a href={process.env.PUBLIC_URL}>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <HomeIcon />
            </IconButton>
          </a>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            記事タイトル
          </Typography>
          <HeaderIcons />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
