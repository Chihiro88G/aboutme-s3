import { Button, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LinkedInBtn() {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Button 
      variant='contained'
      sx={{
        mt: isDesktop ? '60px' : '20px',
        marginRight: '10px'
      }}
      href="https://www.linkedin.com/in/chihiro-h/"
      target="_blank"
    >
      <LinkedInIcon />CONNECT
    </Button>
  );
}
