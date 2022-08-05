import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBar } from 'components/SideBar/SideBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
};

export const Hamburger: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isTrashOpen, setIsTrashOpen] = useState<boolean>(false);

  return (
    <>
      <div onClick={handleOpen}>
        <MenuIcon />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SideBar onClick={() => setIsTrashOpen(true)} />
        </Box>
      </Modal>
    </>
  );
};
