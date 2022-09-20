import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function CustomAlert({message,color}) {
  return (
      <Alert severity={color}>{message}</Alert>
  );
}