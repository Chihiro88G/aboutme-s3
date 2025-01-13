import {Typography, useMediaQuery } from '@mui/material';

export default function MyInfo({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Typography
      variant={isDesktop ? 'h4' : 'h6'}
    >
      {children}
    </Typography>
  );
}
