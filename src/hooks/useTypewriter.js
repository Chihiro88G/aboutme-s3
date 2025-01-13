import  { useState, useEffect } from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';

const useTypewriter = (text, speed = 80) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        if (i === 1) {
          setDisplayText(text.charAt(i - 1) + text.charAt(i))
        }
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};


const Typewriter = ({ text, speed }) => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const displayText = useTypewriter(text, speed);

  return(
    <Box
      sx={{
        display: 'block',
        mt: isDesktop ? '60px' : '',
        m: isDesktop ? '' : '20px auto'
    }}
    >
      <Typography variant='h4' textAlign='center' color='#3f3e40'>
        {displayText}
      </Typography>
    </Box>
  );
};

export default Typewriter;
