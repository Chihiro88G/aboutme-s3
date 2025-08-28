import { useState } from 'react';
import { Button, useMediaQuery, Modal, Box, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function ResumeBtn() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button
        variant='contained'
        sx={{
          mt: isDesktop ? '60px' : '20px',
        }}
        color='success'
        // download='ChihiroH_Resume.pdf'
        // href='ChihiroH_Resume.pdf'
        onClick={handleOpen}
      >
        <PictureAsPdfIcon />RESUME
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Updated resume coming soon...!
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
