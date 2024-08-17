import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';

export default function ActionAlerts({ severity, message, open, onClose }) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {open && (
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={onClose}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          }
        >
          {message}
        </Alert>
      )}
    </Stack>
  );
}
