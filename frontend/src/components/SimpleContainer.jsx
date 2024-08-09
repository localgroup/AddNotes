import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      {children}
      </Container>
    </React.Fragment>
  );
}
