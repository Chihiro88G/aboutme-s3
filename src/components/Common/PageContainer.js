import { Box, useMediaQuery } from '@mui/material';

export default function PageContainer({ children, bgImage }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: '100%',
          minHeight: '100vh',
          m: '0 auto',
          p: isDesktop ? '50px' : '40px',
        }} 
        maxWidth="lg"
      >
        {children}
      </Box>
    </Box>
  )
}