import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CommentReplyForm: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField id="outlined-textarea" label="返信" placeholder="入力してください" multiline />
      </Grid>
      <Grid item xs={6}>
        <Button variant="text" fullWidth>
          <Typography fontSize={12}>返信</Typography>
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="text" fullWidth>
          <Typography fontSize={12}>キャンセル</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" fullWidth>
          <Typography fontSize={10} fontWeight="bold">
            このスレッドを解決済みにする
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
