import React from 'react'
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = (props) => {
  return (
    <div className='card-wrapper'>
      <Card sx={{ maxWidth: 375 }}>
        <CardContent>
          <Typography variant="h6" component="div" fontFamily='Poppins'>
            {props.title}
          </Typography>
          <Typography component="div" fontFamily='Poppins'>
            {props.description}
          </Typography>
        </CardContent>

        <CardActions>
          {props.isCompleted === false ? <Button size="small" onClick={() => props.complete(props.id)}>Complete</Button> : <></> }
          <Button size="small" onClick={() => props.delete(props.id)}>Delete</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Cards