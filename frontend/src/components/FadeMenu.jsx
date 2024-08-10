import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import "../styles/FadeMenu.css"
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import useLoginStatus from '../hooks/useLoginStatus';
import ProtectedRoute from './ProtectedRoute';


export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useLoginStatus();

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
       
          {isLoggedIn ? (
            
            <>
            <ProtectedRoute>
            <MenuItem onClick={() => handleMenuItemClick('/')}>Home</MenuItem>
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/notes')}>Notes</MenuItem>
            </ProtectedRoute>
            </>
          ) : (
            <>
              <MenuItem onClick={() => login()}>Login</MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/register')}>Register</MenuItem>
            </>
          )}

        </Box>

      </Menu>
    </div>
  );
}