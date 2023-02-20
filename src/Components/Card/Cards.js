import React from 'react'
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DeleteIcon from '@mui/icons-material/Delete';
// import PaletteIcon from '@mui/icons-material/Palette';
// import Box from '@mui/material/Box';
// import Popper from '@mui/material/Popper';




const Cards = (props) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(anchorEl ? null : event.currentTarget);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popper' : undefined;

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
        <div className='card-complete-button-container'>
          {props.isCompleted === false ? <AddTaskIcon onClick={() => props.complete(props.id)} /> : <></> }
        </div>
          {/* {props.isCompleted === false ? <Button size="small" onClick={() => props.complete(props.id)}>Complete</Button> : <></> } */}
          <div className='card-delete-button-container'> 
            <DeleteIcon onClick={() => props.delete(props.id)} />
          </div>
          {/* <Button size="small" onClick={() => props.delete(props.id)}>Delete</Button> */}
          
          {/* <div className='card-color-button-container'> 
            <PaletteIcon onClick={handleClick} />
              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} style={{ "background": `${props.color}` }} {...bindTrigger(popupState)}>
                  The content of the Popper.
                </Box>
             </Popper>
          </div> */}
        </CardActions>
        
      </Card>
    </div>
  )
}

export default Cards