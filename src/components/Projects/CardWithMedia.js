import { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';

export default function CardWithMedia({ children, imgUrl }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => setIsLoading(false);
  }, [imgUrl]);

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        m: '10px',
        mb: '15px',
        borderRadius: '10px',
        ':hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{ 
          aspectRatio: '16 / 9',
          objectFit: 'cover',
        }}
        image={imgUrl}
        title="default image"
        isLoading={isLoading}
      />
      {children}
    </Card>
    )
}
