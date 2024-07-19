'use client'
import { Box, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ListCard from '../ListCard/ListCard'
import { FaCirclePlus } from "react-icons/fa6";
import CreateCard from '../CrreateCard/CreateCard'
const Content = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box display='flex' flexDirection='column'>
        <Stack display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Stack className='w-max'borderBottom='4px solid #039be5'>
            <Typography fontSize={30} fontWeight='bold'>All Tasks</Typography>
            </Stack>
            <FaCirclePlus onClick={()=>handleClickOpen()} color='white' fontSize={40} cursor='pointer'></FaCirclePlus>
            <CreateCard open={open} onClose={handleClose}>
            </CreateCard>
        </Stack>
        <Stack pt={4}>
            <ListCard></ListCard>
        </Stack>
    </Box>
  )
}

export default Content