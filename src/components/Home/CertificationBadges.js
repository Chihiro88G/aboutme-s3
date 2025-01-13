import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';
import CloudPractitionerBadge from '../../images/aws-certified-cloud-practitioner.png';

export default function CertificationBadges() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const fadeInUpAndSpin = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) rotate(0deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(360deg);
  }
`;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isDesktop ? 'space-evenly' : 'center',
        mt: '30px',
      }} 
    >
      {showBadge && 
      <Box
        component="img"
        src={CloudPractitionerBadge}
        alt='AWS Cloud Practitioner Badge'
        sx={{
          animation: `${fadeInUpAndSpin} 0.6s ease-out`,
          // animationDelay: '1s',
          maxWidth: '100%',
          height: 'auto',
        }}/>
      }
    </Box>
  );
}