"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import {  SignOutButton, UserButton, useUser } from '@clerk/nextjs';
import Menu from '../Menu/Menu';
import Link from 'next/link';

const Siderbar = () => {
    const user = useUser()
    return (
    <Box p={4} display='flex' flexDirection='column' justifyContent='space-between' height='100%'>
        <Stack alignItems='center' display='flex' justifyContent='center' flexDirection='row' gap={2} >
            {user.isSignedIn ?<>
            <UserButton></UserButton>
            <Typography>{user.user?.username}</Typography>
            </>:
            <Box display='flex' width='100%' justifyContent='center'>
                <Link href='/sign-in' className='w-[100%] flex justify-center'>
                    <Button sx={{width:'80%',color:'white',bgcolor:'#414141','&:hover':{bgcolor:'#757575'}}}>Login</Button>
                </Link>
            </Box>}
        </Stack>
        <Menu></Menu>
        <Stack flexDirection='row' gap={2} alignItems='center'>
            {user.isSignedIn ?
                <>
            <IoIosLogOut fontSize={30}></IoIosLogOut>
            <SignOutButton></SignOutButton>
            </>: ''
            }
        </Stack>
    </Box>
  )
}

export default Siderbar