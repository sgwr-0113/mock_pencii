import React, { useState } from 'react';
import { DashTable } from 'components/DashTable/DashTable';
import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';
import Styles from './Index.module.scss';
import Box from '@mui/material/Box';
import { TrashTable } from 'components/DashTable/TrashTable';

export const Index: React.FC = () => {
  const [isTrashOpen, setIsTrashOpen] = useState<boolean>(false);
  console.log(isTrashOpen);

  return (
    <div className={Styles['wrapper']}>
      <Header />
      <div className={Styles['content']}>
        <div className={Styles['content_left']}>
          <SideBar onClick={() => setIsTrashOpen(!isTrashOpen)} />
        </div>
        <div className={Styles['content_body']}>
          <Box sx={{ flexGrow: 1 }}>
            <div className={Styles['content_body_inner']}>{isTrashOpen ? <TrashTable /> : <DashTable />}</div>
          </Box>
        </div>
      </div>
    </div>
  );
};
