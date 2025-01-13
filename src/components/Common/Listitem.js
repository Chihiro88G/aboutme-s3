import { ListItem, useMediaQuery } from '@mui/material';

export default function Listitem({ children }) {
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <ListItem 
      sx={{ 
        display: 'list-item',
        p: isDesktop ? '' : 0,
      }}
    >
      {children}
    </ListItem>
  )
}