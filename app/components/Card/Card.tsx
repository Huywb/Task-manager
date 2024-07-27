'use client'
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PiNotePencilDuotone } from "react-icons/pi";
import { MdDelete } from "react-icons/md";
import CreateCard from '../CrreateCard/CreateCard';
interface CardProps{
  _id: string,
  title: string,
  description: string,
  Date: string,
  isCompleted: boolean,
  isImportant: boolean
}
const Card = ({item}:{item:CardProps}) => {
  const [data,setData] = useState()
  const [open, setOpen] = useState(false);


  const getData = async()=>{
    const fetchData = await fetch(`http://localhost:3000/api/task/edit/${item._id}`)
    const finalData = await fetchData.json()
    setData(finalData)
  }
  useEffect(()=>{
    getData()
  },[item._id])
  const handleDelete=async( id:String)=>{
   await fetch(`http://localhost:3000/api/task/edit/${id}`,{
    method:'DELETE',
   })
    location.reload()
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    item? (
    <Box display='flex' height='100%' justifyContent='space-around' flexDirection='column' gap={1} width='100%'>
      <Typography fontSize={26}>{item.title}</Typography>
      <Typography maxHeight='40%'overflow='hidden' variant="subtitle1" gutterBottom fontSize={14}>{item.description}</Typography>
      <Stack gap={1}>
          <Typography fontSize={20}>{item.Date}</Typography>
          <Stack display='flex' flexDirection='row' gap={2} justifyContent='space-between'>
              <Button sx={{borderRadius:'40px',fontWeight:'bold'}} variant="contained" color={item.isCompleted ? 'success' : 'error'}>{item.isCompleted ? 'Completed' : 'InCompleted'}</Button>
              <Stack flexDirection='row' alignItems='center' gap={1}>
                  <PiNotePencilDuotone fontSize={26} cursor='pointer' color='white' onClick={()=>handleClickOpen()} ></PiNotePencilDuotone>
                  <MdDelete fontSize={26} onClick={()=>handleDelete(item._id)} cursor='pointer'  color='white'></MdDelete>
                  <CreateCard open={open} onClose={handleClose} data={data}></CreateCard>
              </Stack>
          </Stack>
      </Stack>
    </Box>) :   
    (<Box></Box>)
    
  )
}

export default Card