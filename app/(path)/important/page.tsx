'use client'

import CreateCard from '@/app/components/CrreateCard/CreateCard';
import ListCard from '@/app/components/ListCard/ListCard';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6';

const Important = () => {
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
            <Stack className='w-max'borderBottom='4px solid #dd2c00'>
            <Typography fontSize={30} fontWeight='bold'>Important!</Typography>
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

export default Important