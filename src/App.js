import {useState, useEffect} from 'react'
import './App.css';
import Cards from './Components/Card/Cards';
import Header from './Components/Header/Header';
//import Footer from './Components/Footer/Footer';
//import {Data} from './Utils/Data'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function App() {
const [todoList, setTodoList] = useState([])
const [input, setInput] = useState('')
const [description, setDescription] = useState('')

useEffect(()=>{
  const data = localStorage.getItem("data")
  if(data){
    setTodoList(JSON.parse(data))
  }
},[])

const AddHandler = (e) => {
    const todo = {
      title: input, 
      id:Math.random(), 
      description:description,
      isCompleted: false, 
      isDeleted: false
    }
    // todoList.push(todo)
    // setTodoList(items)
    setInput('')
    setDescription('')

    todoList.push(todo) //adding new object in state
  setTodoList([...todoList]) // updating state

    localStorage.setItem("data",JSON.stringify(todoList))
}

const completeHandler = (id) => {
  const todo = todoList.find(e => e.id === id)
      todo.isCompleted = true
      setTodoList([...todoList])
      localStorage.setItem("data",JSON.stringify(todoList)) //updating local storage with state

}

const deleteHandler = (id) => {
  const todo = todoList.find(e => e.id === id)
      todo.isDeleted = true
      setTodoList([...todoList])
      localStorage.setItem("data",JSON.stringify(todoList)) //updating local storage with state
}

const UpdateColor = (id, color) => {

  const todo = todoList.find(e => e.id === id); // finds the element with id 
  todo.color = color // changes are made which are reflected automatically
  
  setTodoList([...todoList]) //updating the current state
  localStorage.setItem("data", JSON.stringify(todoList)) //updating local storage with state
}

  return (
    
    <div className='main-container'>
      <Header />

      <div className='input-container'>

        <TextField id="outlined-basic" label="Title" variant="outlined" 
        value={input} name='todo' onChange={(e) => setInput(e.target.value)} />

        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="Description" 
        id="fullWidth" 
        name='description'
        value={description}
        multiline rows={3}
        onChange={(e) => setDescription(e.target.value)}
        />
        </Box>

     <Button variant="contained" onClick={AddHandler}>Add</Button> 
      </div>

      <div className='output-container'>  

        <div className='card-container'>
          <h4>Pending</h4>
          <div className='card-list'>
            {
              todoList?.map((e) => {
                if(!e.isCompleted){
                  return(
                    <div>
                      {!e.isDeleted &&
                        <Cards key={e.id} id={e.id} title={e.title} description={e.description} 
                        complete={completeHandler} delete={deleteHandler} 
                        isCompleted={e.isCompleted} 
                        updateColor={UpdateColor} color={e.color} />
                      }
                    </div>
                  )
                }
                else{
                return <></>
              }
              })
            }
          </div>  
        </div> 
        
        <div className='card-container'>
            <h4>Completed</h4>
            <div className='card-list'></div>  
            {
                todoList?.map((e) => {
                  if(e.isCompleted){
                    return (!e.isDeleted &&
                      <Cards key={e.id} id={e.id} title={e.title} description={e.description} 
                      complete={completeHandler} delete={deleteHandler} 
                      isCompleted={e.isCompleted}
                      updateColor={UpdateColor} color={e.color} />
                    )
                  } else{
                    return <></>
                  }
                })
              }
        </div>

      </div> 
      

    </div>

  );
}

export default App;
