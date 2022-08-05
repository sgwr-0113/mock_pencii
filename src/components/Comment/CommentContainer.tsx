import React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { CommentBox } from './CommentBox';
import { CommentReplyForm } from './CommentReplyForm';

export const CommentContainer: React.FC = () => {
  return (
    <Paper sx={{ px: '16px', py: '12px' }}>
      <CommentBox />
      <Divider sx={{ my: '16px' }} />
      <CommentBox />
      <Divider sx={{ my: '16px' }} />
      <CommentReplyForm />
    </Paper>
  );
};
