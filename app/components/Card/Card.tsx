import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
const Card = () => {
  return (
    <Box display='flex' height='100%' justifyContent='space-around' flexDirection='column' gap={1} width='100%'>
        <Typography fontSize={26}>Test</Typography>
        <Typography maxHeight='40%'overflow='hidden' variant="subtitle1" gutterBottom fontSize={14}>This is one best hobbit in the word and you can do it now so it is impossible</Typography>
        <Stack gap={1}>
            <Typography fontSize={20}>Date time</Typography>
            <Stack display='flex' flexDirection='row' gap={2} justifyContent='space-between'>
                <Button sx={{borderRadius:'40px',fontWeight:'bold'}} variant="contained" color="error">Completed</Button>
                <Stack flexDirection='row' alignItems='center' gap={1}>
                    <PiNotePencilDuotone fontSize={26} cursor='pointer' color='white'></PiNotePencilDuotone>
                    <MdDelete fontSize={26} cursor='pointer'  color='white'></MdDelete>
                </Stack>
            </Stack>
        </Stack>
    </Box>
  )
}

export default Card