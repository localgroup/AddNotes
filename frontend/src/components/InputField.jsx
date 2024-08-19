import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

export default forwardRef(function InputField(props, ref) {
  const { id, label, type, error, helperText, ...rest } = props;

  return (
    <TextField
      id={id}
      label={label}
      type={type}
      error={error}
      helperText={helperText}
      variant="outlined"
      fullWidth
      inputRef={ref}
      {...rest}
    />
  );
});