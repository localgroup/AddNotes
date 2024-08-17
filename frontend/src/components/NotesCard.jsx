import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../styles/Card.css"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NotesCard({ title, content, formattedDate, onDelete, image }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='Card'>
      <CardHeader className='CardHeader'
        avatar={
          <Avatar 
              alt="Remy Sharp" 
              src="/static/images/avatar/avatar.jpg" 
              sx={{ bgcolor: red[500] }} 
              aria-label="recipe" 
              className="MuiAvatar-root"
          />

        }
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        }
        title={title.toUpperCase()}
        subheader={formattedDate}
      />
      <CardMedia className='CardMedia'
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent className='CardContent'>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='CardActions MuiTypography-root'>
        <ExpandMore className='ExpandMore'
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit className='Collapse MuiTypography-root'>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>
            ...
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}