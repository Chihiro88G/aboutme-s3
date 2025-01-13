import { Typography, useMediaQuery } from '@mui/material';

export default function Title({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Typography
      variant={isDesktop ? 'h4' : 'h6'}
      color='#0d7858'
      textAlign='center'
      mb='15px'
    >
      {children}
    </Typography>
  );
}
