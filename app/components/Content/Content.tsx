import { Box, Stack, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'
import ListCard from '../ListCard/ListCard'
import { FaCirclePlus } from "react-icons/fa6";
const Content = () => {
  return (
    <Box display='flex' flexDirection='column'>
        <Stack display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Stack className='w-max'borderBottom='4px solid #8efb9c'>
            <Typography fontSize={30} fontWeight='bold'>All Tasks</Typography>
            </Stack>
            <FaCirclePlus color='white' fontSize={40} cursor='pointer'></FaCirclePlus>
        </Stack>
        <Stack pt={4}>
            <ListCard></ListCard>
        </Stack>
    </Box>
  )
}

export default Content