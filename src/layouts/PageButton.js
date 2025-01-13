import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function PageButton({ pageName, path }) {
  const navigate = useNavigate();

  return (
    <Button
      key={pageName}
      sx={{ 
        my: { xs: 0, md: 2},
        color: 'white',
        display: 'block'
      }}
      onClick={() => navigate(path)}
    >
      {pageName}
    </Button>
  );
}