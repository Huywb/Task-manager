'use client'
import CreateCard from '@/app/components/CrreateCard/CreateCard';
import ListCard from '@/app/components/ListCard/ListCard';
import { useUser } from '@clerk/nextjs';
import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { FaCirclePlus } from 'react-icons/fa6';

const Completed = () => {
  const [listTask,setListTask] = useState([])
    const user = useUser()
    const id = user.user?.id
    
    const getListTask =async (id:string)=>{
      setTimeout(async() => {
        const data = await fetch(`http://localhost:3000/api/task/${id}`)
        const tasks = await data.json()
        const listData = tasks.filter((item:any)=>item.isCompleted === true)
        setListTask(listData)
      }, 2000);
        
    }
    useEffect(()=>{
        if(id){
          localStorage.setItem('id',id)
          const url = localStorage.getItem('id')
          getListTask(url || '')

         }
    },[user.user?.id])
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
            <Stack className='w-max'borderBottom='4px solid #8efb9c'>
            <Typography fontSize={30} fontWeight='bold'>Completed</Typography>
            </Stack>
            <FaCirclePlus onClick={()=>handleClickOpen()} color='white' fontSize={40} cursor='pointer'></FaCirclePlus>
            <CreateCard open={open} onClose={handleClose}>
            </CreateCard>
        </Stack>
        <Stack pt={4}>
            <ListCard listTask={listTask}></ListCard>
        </Stack>
    </Box>
  )
}

export default Completed