import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
        <Box sx={{ width: '100%' }}>
          <Stack spacing={2}>
            {Array.isArray(children) ? (
              children.map((child, index) => (
                <Item key={index}>{child}</Item>
              ))
            ) : <Item>No notes found.</Item> }
          </Stack>
        </Box>
    </React.Fragment>
  );
}