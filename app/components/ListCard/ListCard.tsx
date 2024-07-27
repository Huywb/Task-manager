'use client'
import { Grid } from '@mui/material'
import React, { use, useEffect, useState } from 'react'
import Card from '../Card/Card'
import AddCard from '../AddCard/AddCard'
interface Task {
    _id: string;
    title: string;
    description: string;
    Date: string;
    isCompleted: boolean;
    isImportant: boolean;
  }
  
  interface TaskListProps {
    listTask: Task[];
  }
const ListCard:React.FC<TaskListProps> = ({listTask}) => {
    
  return (
    <Grid container columns={13} gap={2}>
        {listTask.map((item,index)=>(
            <Grid item md={3} key={index} bgcolor='#424242' p={2} width='100%' border='2px solid #616161' borderRadius='10px' justifyContent='center'>
                <Card item={item}></Card>
            </Grid>
        ))}
        <Grid item md={3}  bgcolor='#212121' p={2} border='2px dashed #616161' borderRadius='10px' justifyContent='center'>
            <AddCard></AddCard>
        </Grid>
    </Grid>
  )
}

export default ListCard