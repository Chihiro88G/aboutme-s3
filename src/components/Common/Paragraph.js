import { Typography, useMediaQuery } from '@mui/material';

export default function Paragraph({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Typography m={isDesktop ? 5 : 2} lineHeight={2}>
      {children}
    </Typography>
  );
}