import React from "react";
import { Box, Typography, Container} from '@mui/material'
interface OutputProps {
  reply: string;
}

export default function Output ({reply}: OutputProps) {

  return (
    <Box 
    className='output'>
      <Typography>{reply}</Typography>
    </Box>
  )

}