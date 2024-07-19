import { Box, Typography } from '@mui/material'
import React from 'react'
import { FiPlus } from "react-icons/fi";
const AddCard = () => {
  return (
    <Box display='flex' height='100%' sx={{cursor:'pointer',opacity:0.6,transition: '0.3s','&:hover':{opacity:1}}} justifyContent='center' alignItems='center' gap={1} width='100%'>
        <FiPlus color='white'></FiPlus>
        <Typography fontSize={26}>Add New Task!</Typography>
    </Box>

  )
}

export default AddCard