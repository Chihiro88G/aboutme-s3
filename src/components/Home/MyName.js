import {Typography, useMediaQuery } from '@mui/material';

export default function MyName({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Typography
      variant={isDesktop ? 'h3' : 'h4'}
      sx={{
        mt: isDesktop ? '60px' : '',
        marginBottom: '10px',
      }}
    >
      {children}
    </Typography>
  );
}
