'use client'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import { ListMenu} from '@/utils/menu'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import logo from '../../../public/logo.svg'

const Siderbar = () => {
    const pathName = usePathname()
    const {userId} = auth()
  return (
    <Box p={4} display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
        <Stack gap={2} flexDirection='row'>
           <Image src={logo} alt='logo'></Image>
            <Stack  alignItems='center' >
                <Typography fontSize={20}>Name</Typography>
                <Typography fontSize={20} fontWeight='bold'>Name</Typography>
            </Stack>
        </Stack>
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
        <Stack flexDirection='row' gap={2} alignItems='center'>
            <IoIosLogOut fontSize={30}></IoIosLogOut>
            <Link href='/'>
            <Typography>Sign out</Typography>

            </Link>
        </Stack>
    </Box>
  )
}

export default Siderbar