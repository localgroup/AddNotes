import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

export default function ActionAlerts() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {open && (
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          }
        >
          This Alert displays the default close icon.
        </Alert>
      )}
      {open && (
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          }
        >
          This Alert uses a Button component for its action.
        </Alert>
      )}
    </Stack>
  );
}
