'use client'

import { Box, Button, Checkbox, Dialog, DialogTitle, Input, styled, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useUser } from '@clerk/nextjs';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
interface Task {
    _id: string;
    title: string;
    description: string;
    Date: string;
    isCompleted: boolean;
    isImportant: boolean;
  }
interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    data?: Task
}
const CreateCard = (props: SimpleDialogProps) => {
    
  const { onClose,  open,data } = props;
  const user = useUser()
  const router = useRouter()
  const [time,setTime] = useState('')
  const {register,reset,handleSubmit} = useForm({
    defaultValues:{
        id: user.user?.id,
        username: user.user?.username,
        title: data?.title,
        description: data?.description,
        isCompleted: data?.isCompleted,
        isImportant:data?.isImportant,
    }
  })
  console.log(data)
  const onSubmit = async (value:any)=>{
    if(!value.id || !value.name){
        value.id= user.user?.id,
        value.username=user.user?.username
    }
    const timeData = time.split('-').reverse().join('/')
    const value1 = {...value,Date:timeData}
    if(data){
        const UpdateTask = await fetch(`http://localhost:3000/api/task/edit/${data._id}`,{
            method: 'PATCH',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(value1)
        })
        if(UpdateTask){
            toast.success("Update Task completed")
        }else{
            toast.error("Cannot update task")
        }
        handleClose()
        location.reload();

    }else{
        const AddTask = await fetch('http://localhost:3000/api/task',{
            method:'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(value1)
        })
        if(AddTask){
            toast.success("Create Task completed")
        }else{
            toast.error("Cannot add Task")
        }
        handleClose()
        location.reload();
    }
  }
  const handleClose = () => {
    onClose()
  };


  return (
    <Dialog onClose={handleClose} open={open}  >
        <Box bgcolor='#414141' color='white' width='500px'>
            <Box  display='flex'flexDirection='row' justifyContent='space-between'>
                <DialogTitle sx={{paddingY:'12px'}} fontSize={20}>{data? 'Update Task' : 'Create a Task'}</DialogTitle>
                <Button onClick={()=>onClose()} sx={{color:'white'}}>X</Button>
            </Box>
            <Box >
                <DialogTitle  fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Title</DialogTitle>
                <Input defaultValue={data?.title } {...register('title')} sx={{borderRadius:'5px',height:'50px',color:'white',marginX:'20px',paddingX:'20px',fontSize:'18px',width:'90%',bgcolor:'#212121'}} placeholder='Hello Word'></Input>
            </Box>
            <Box>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Description</DialogTitle>
                <TextareaAutosize defaultValue={data?.description} {...register('description')}  className='bg-[#212121] outline-none rounded-md text-white mx-5 px-5 py-2 w-[90%] '  maxRows={4} minRows={4} placeholder="Take your note here" ></TextareaAutosize>
            </Box>
            <Box>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Date</DialogTitle>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']}  sx={{marginLeft:'20px',marginRight:'12px'}} >
                        <DatePicker  onChange={(value:any)=>{var date = new Date(value.$d)
          var day = date.getDate() 
        var month = date.getMonth() + 1
        var year = date.getFullYear()
  
         setTime(year + '-' + month + '-' + day);}} format="DD/MM/YYYY"  sx={{width:'95%',bgcolor:'#212121',outline:'none','input':{color:'#9e9e9e'},'button':{color:'white'}}} />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
            <Box display='flex' justifyContent='space-between' marginRight='20px' >
                <DialogTitle fontSize={18}  sx={{opacity:'.8',paddingY:'12px'}}>Toggle Completed</DialogTitle>
                <Checkbox defaultChecked={data?.isCompleted} {...register('isCompleted')} sx={{color:'white', '&.Mui-checked': { color: '#00e676', },}}></Checkbox>
            </Box>
            <Box display='flex' justifyContent='space-between' marginRight='20px'>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Toggle Important</DialogTitle>
                <Checkbox defaultChecked={data?.isImportant} {...register('isImportant')} sx={{color:'white', '&.Mui-checked': { color: '#00e676', },}}></Checkbox>
            </Box>
            <Box display='flex' justifyContent='flex-end' paddingY={2} paddingX={4} >
                <Button onClick={handleSubmit(onSubmit)} sx={{bgcolor:'#00b0ff',color:'white',paddingX:'20px',paddingY:'10px','&:hover':{bgcolor:'#00e5ff'}}}  >{data ? 'Update Task' : 'Create Task'}</Button>
            </Box>
        </Box>
    </Dialog>
  )
}

export default CreateCard