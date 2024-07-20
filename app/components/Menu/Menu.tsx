'use client'
import { ListMenu } from '@/utils/menu'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu = () => {
    const pathName = usePathname()

  return (
    <Stack>
            {ListMenu.map((item,index)=>(
                    <Box key={index} sx={{opacity:`${pathName === item.route ? '1' : '0.5'}`,
                                        bgcolor:`${pathName === item.route ? '#424242   ' : ''}`,
                                        borderRadius:'10px',
                                        cursor:'pointer',
                                        '&:hover':{
                                            opacity:1
                                        },
                                        transition:'0.3s' }} display='flex' alignItems='center' paddingY={1} gap={4}>
                        <IconButton>{item.logo}</IconButton>
                        <Link href={item.route}>
                        <Typography>{item.name}</Typography>
                        </Link>
                    </Box>
            ))}
        </Stack>
  )
}

export default Menu