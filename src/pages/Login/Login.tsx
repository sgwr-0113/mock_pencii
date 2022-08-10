import React from 'react';
import Styles from './Login.module.scss';
import { Button, Paper, TextField } from '@mui/material';
import LoginImage from 'images/logo-login.jpeg';

export const Login: React.FC = () => {
  return (
    <div className={Styles['wrapper']}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '450px',
        }}
      >
        <div style={{ width: '100%' }}>
          <img src={LoginImage} style={{ width: '100px' }} />
        </div>
        <div className={Styles['container']}>
          <p className={Styles['container_title']}>ログイン</p>
          <div className={Styles['container_field']}>
            <TextField label="メールアドレス" variant="standard" fullWidth required sx={{ mb: 3 }} />
            <TextField type="password" label="パスワード" variant="standard" fullWidth required />
          </div>
          <div className={Styles['container_button']}>
            <a href={process.env.PUBLIC_URL}>
              <Button type="submit" color="primary" variant="contained" fullWidth>
                サインイン
              </Button>
            </a>
          </div>
        </div>
        <div className={Styles['caption']}>
          <li>
            パスワードを忘れた方は<a href="#">こちら</a>
          </li>
          <li>
            初めてご利用の方は<a href="#">こちら</a>
          </li>
        </div>
      </Paper>
    </div>
  );
};
