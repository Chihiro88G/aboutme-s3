import { Box } from '@mui/material';
import loadingAnimation from '../images/loading-animation.gif'

export default function Loading() {

  return(
    <Box
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
    >
      <img alt='loading...' src={loadingAnimation}></img>
    </Box>
  );
}