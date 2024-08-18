import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ id, label, type, error, helperText, ...props }) => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      error={error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
};

export default InputField;
