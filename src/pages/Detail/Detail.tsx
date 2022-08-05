import React, { useState } from 'react';
import Styles from './Detail.module.scss';
import { DetailHeader } from 'components/Header/DetailHeader';
import { EditHeader } from 'components/EditHeader/EditHeader';
import { ContentsArea } from 'components/ContentsArea/ContentsArea';
import Box from '@mui/material/Box';
import { SideDrawer } from 'components/SideDrawer/SideDrawer';
import { CommentContainer } from 'components/Comment/CommentContainer';
import Button from '@mui/material/Button';
import { TimelineArea } from 'components/History/TimelineArea';

export const Detail: React.FC = () => {
  const [contentsWidth, setContentsWidth] = useState<number>(800);
  const [isHistory, setIsHistory] = useState<boolean>(false);

  const sideDrawerWidth = 240;

  return (
    <div className={Styles['wrapper']}>
      <Box sx={{ width: '100%', position: 'fixed', zIndex: 100 }}>
        <DetailHeader />
        <EditHeader setContentsWidth={() => setContentsWidth} />
      </Box>
      <div className={Styles['contents']}>
        <Box sx={{ width: '240px', position: 'fixed' }}>{isHistory ? <TimelineArea /> : <SideDrawer />}</Box>
        <Box sx={{ width: sideDrawerWidth }}></Box>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <ContentsArea contentsWidth={contentsWidth} />
        </Box>
        <Box sx={{ width: sideDrawerWidth }}>
          <Button variant="contained" sx={{ position: 'fixed', right: 0 }} onClick={() => setIsHistory(!isHistory)}>
            {isHistory ? '現在の記事に戻る' : '編集履歴を見る'}
          </Button>
          <Box sx={{ mt: 100 }}>
            <CommentContainer />
          </Box>
        </Box>
      </div>
    </div>
  );
};
