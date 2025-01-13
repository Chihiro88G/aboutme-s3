import { Link } from 'react-router-dom';
import { Box, CardActions, CardContent, Typography } from '@mui/material';
import CardWithMedia from './CardWithMedia';

export default function ProjectCard({ name, overview, link, imgUrl }) {

  return (
    <CardWithMedia imgUrl={imgUrl}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: '7px'}}>
          <Typography variant="body1" component="div">
            {name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'right' }}>
        <Link 
          to={link} 
          target='_blank' 
          style={{ textDecoration: 'none', paddingRight: 5 }}>
            View Github Repo
        </Link>
      </CardActions>
    </CardWithMedia>
  )
}

