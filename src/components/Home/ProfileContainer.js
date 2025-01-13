import { Box, useMediaQuery } from '@mui/material';

export default function ProfileContainer({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Box
      sx={{
        display: isDesktop ? 'flex' : 'block',
        justifyContent: 'space-evenly',
      }} 
    >
        {children}
    </Box>
  );
}