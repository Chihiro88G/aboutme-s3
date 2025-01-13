import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

export default function Logo() {

  return (
    <Fragment>
      <FaceRetouchingNaturalIcon sx={{ m: '3px' }}/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Chihiro.ca
      </Typography>
    </Fragment>
  );
}
