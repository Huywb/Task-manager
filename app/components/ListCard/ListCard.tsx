import { Grid } from '@mui/material'
import React from 'react'
import Card from '../Card/Card'
import AddCard from '../AddCard/AddCard'

const ListCard = () => {
  return (
    <Grid container columns={13} gap={2}>
        <Grid item md={3}  bgcolor='#424242' p={2} border='2px solid #616161' borderRadius='10px' justifyContent='center'>
            <Card></Card>
        </Grid>
        <Grid item md={3}  bgcolor='#424242' p={2} border='2px solid #616161' borderRadius='10px' justifyContent='center'>
            <Card></Card>
        </Grid>
        <Grid item md={3}  bgcolor='#424242' p={2} border='2px solid #616161' borderRadius='10px' justifyContent='center'>
            <Card></Card>
        </Grid>
        <Grid item md={3}  bgcolor='#424242' p={2} border='2px solid #616161' borderRadius='10px' justifyContent='center'>
            <Card></Card>
        </Grid>
        <Grid item md={3}   bgcolor='#424242' p={2} border='2px solid #616161' borderRadius='10px' justifyContent='center'>
            <Card></Card>
        </Grid>
        <Grid item md={3}  bgcolor='#212121' p={2} border='2px dashed #616161' borderRadius='10px' justifyContent='center'>
            <AddCard></AddCard>
        </Grid>
    </Grid>
  )
}

export default ListCard