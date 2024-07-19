import { Box, Button, Checkbox, Dialog, DialogTitle, Input, styled, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';

interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}
const CreateCard = (props: SimpleDialogProps) => {
    
  const { onClose,  open } = props;

  const handleClose = () => {
    onClose()
  };

  return (
    <Dialog onClose={handleClose} open={open}  >
        <Box bgcolor='#414141' color='white' width='500px'>
            <Box  display='flex'flexDirection='row' justifyContent='space-between'>
                <DialogTitle sx={{paddingY:'12px'}} fontSize={20}>Create a Task</DialogTitle>
                <Button onClick={()=>onClose()} sx={{color:'white'}}>X</Button>
            </Box>
            <Box >
                <DialogTitle  fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Title</DialogTitle>
                <Input sx={{borderRadius:'5px',height:'50px',color:'white',marginX:'20px',paddingX:'20px',fontSize:'18px',width:'90%',bgcolor:'#212121'}} placeholder='Hello Word'></Input>
            </Box>
            <Box>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Description</DialogTitle>
                <TextareaAutosize  className='bg-[#212121] outline-none rounded-md text-white mx-5 px-5 py-2 w-[90%] '  maxRows={4} minRows={4} placeholder="Take your note here" />
            </Box>
            <Box>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Date</DialogTitle>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DemoContainer components={['DatePicker']} sx={{marginLeft:'20px',marginRight:'12px'}} >
                        <DatePicker  format="DD/MM/YYYY"  sx={{width:'95%',bgcolor:'#212121',outline:'none','input':{color:'#9e9e9e'},'button':{color:'white'}}}  defaultValue={dayjs(Date.now())} />
                    </DemoContainer>
                </LocalizationProvider>
            </Box>
            <Box display='flex' justifyContent='space-between' marginRight='20px' >
                <DialogTitle fontSize={18}  sx={{opacity:'.8',paddingY:'12px'}}>Toggle Completed</DialogTitle>
                <Checkbox sx={{color:'white', '&.Mui-checked': { color: '#00e676', },}}></Checkbox>
            </Box>
            <Box display='flex' justifyContent='space-between' marginRight='20px'>
                <DialogTitle fontSize={18} sx={{opacity:'.8',paddingY:'12px'}}>Toggle Important</DialogTitle>
                <Checkbox sx={{color:'white', '&.Mui-checked': { color: '#00e676', },}}></Checkbox>
            </Box>
            <Box display='flex' justifyContent='flex-end' paddingY={2} paddingX={4} >
                <Button sx={{bgcolor:'#00b0ff',color:'white',paddingX:'20px',paddingY:'10px','&:hover':{bgcolor:'#00e5ff'}}}  >Create Task</Button>
            </Box>
        </Box>
    </Dialog>
  )
}

export default CreateCard