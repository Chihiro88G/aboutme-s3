import { Button, useMediaQuery } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function ResumeBtn() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Button
      variant='contained'
      sx={{
        mt: isDesktop ? '60px' : '20px',
      }}
      color='success'
      download='ChihiroH_Resume.pdf'
      href='ChihiroH_Resume.pdf'
    >
      <PictureAsPdfIcon />RESUME
    </Button>
  );
}
