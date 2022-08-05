import React from 'react';
import Paper from '@mui/material/Paper';
import Styles from './TimelineCard.module.scss';

export const TimelineCard: React.FC = () => {
  return (
    <Paper>
      <div className={Styles['wrapper']}>
        <div className={Styles['upper']}>
          <p className={Styles['upper__timestamp']}>2022年7月14日 12:12</p>
        </div>
        <div className={Styles['lower']}>
          <p className={Styles['lower__editor']}>編集者：菅原 悠貴</p>
          <p className={Styles['lower__count']}>5432文字</p>
        </div>
      </div>
    </Paper>
  );
};
