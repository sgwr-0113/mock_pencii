import React from 'react';
import Paper from '@mui/material/Paper';
import { TimelineCard } from './TimelineCard';
import Box from '@mui/material/Box';

export const TimelineArea: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <TimelineCard />
    </Box>
  );
};
