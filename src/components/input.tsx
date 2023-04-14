import React from "react";
import { TextField, Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface InputProps {
  handleSubmit: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
 }

export default function Input ({handleSubmit, handleChange, value}: InputProps) {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <Box component='form' onSubmit={handleSubmit} width='47%' >
      <TextField 
        id="standard-basic" 
        fullWidth
        label="Add something" 
        variant="outlined" 
        onChange={handleChange} />
    </Box>
    </ThemeProvider>
  )
}
// 
