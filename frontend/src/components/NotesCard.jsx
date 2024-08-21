import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import "../styles/Card.css"


export default function NotesCard({ title, content, formattedDate, onDelete }) {


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
              className="MuiAvatar-root"
          />

        }
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        }
        title={title.toUpperCase()}
      />
      <CardContent className='CardContent'>
        <Typography variant="body2" color="text.secondary" >
          <p dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='CardActions MuiTypography-root'>
      <Typography variant="body2" color="text.secondary">
        {formattedDate}
      </Typography>
      
      </CardActions>
    </Card>
  );
}