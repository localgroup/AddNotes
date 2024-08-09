import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import "../styles/FadeMenu.css"
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        AddNote
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box 
         sx={{
          p: 2,
          border: '1px solid #ddd',
          width: 150,
          height: 'auto',
          borderRadius: 2,
          bgcolor: 'background.paper',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            bgcolor: 'grey.100',
          },
        }}>

          <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/notes')}>Notes</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/login')}>Login</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/register')}>Register</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/logout')}>Logout</MenuItem>
        </Box>

      </Menu>
    </div>
  );
}