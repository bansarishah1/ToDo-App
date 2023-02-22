import React from 'react'
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DeleteIcon from '@mui/icons-material/Delete';
import PaletteIcon from '@mui/icons-material/Palette';

import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';


const Cards = (props) => {

  return (
    <div className='card-wrapper'>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Card sx={{ maxWidth: 375 }} style={{ "background": `${props.color}` }} >
        
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
          
          <div className='card-color-button-container'> 
          <PaletteIcon onClick={() => props.color.id} {...bindTrigger(popupState)} />
            
              
          </div>
        </CardActions>
        
      </Card>

      <Popover
          {...bindPopover(popupState)}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
          }}
          transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
          }}
        >
        <FormControl>
          <RadioGroup
            rowaria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => props.updateColor(props.id, e.target.value)}
            >
              <FormControlLabel value="#BAD7E9" control={<Radio />} label="Blue" />
              <FormControlLabel value="#EAEAEA" control={<Radio />} label="Grey" />
              <FormControlLabel value="#F48484" control={<Radio />} label="Red" />
              <FormControlLabel value="#B6E2A1" control={<Radio />} label="Green" />
              <FormControlLabel value="#FFCEFE" control={<Radio />} label="Pink" />
              <FormControlLabel value="#ECCCB2" control={<Radio />} label="Brown" />
              <FormControlLabel value="#E5D1FA" control={<Radio />} label="Purple" />
              <FormControlLabel value="#FFF6BD" control={<Radio />} label="Yellow" />
              <FormControlLabel value="#FBC687" control={<Radio />} label="Orange" />


          </RadioGroup>
        </FormControl>
      </Popover>

          </div>
        )}

      
      </PopupState>
    </div>
  )
}

export default Cards