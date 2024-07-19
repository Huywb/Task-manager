'use client'
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import CreateCard from '../CrreateCard/CreateCard';
const AddCard = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box  display='flex' height='100%' sx={{cursor:'pointer',opacity:0.6,transition: '0.3s','&:hover':{opacity:1}}} justifyContent='center' alignItems='center' gap={1} width='100%'>
          <Button onClick={()=>handleClickOpen()} sx={{width:'100%',color:'white',height:'100%'}} ><FiPlus color='white' fontSize={24} className='pr-2'></FiPlus>  Add New Task!</Button>
      </Box>
      <CreateCard open={open} onClose={handleClose}>
      </CreateCard>
    </> 
  )
}

export default AddCard