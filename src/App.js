import React,{useState} from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [item,setItem]=useState('')
  const [todos,setTodos]=useState([])

  const handleSubmit=()=>{
    if (item ==='') {
      alert('Must not be Empty')
    }else{
      setTodos([{id:uuidv4(),item},...todos])
      setItem('')
    }
  }
  return (
    <div className="App">
    
        <div className= "inputDiv">
          
           <input type="text" placeholder='Todo ....'
           value={item}
           onChange={(e)=>{
            setItem(e.target.value)
           }}
           />
           <button onClick={()=>handleSubmit()}>Add</button> 
        </div>
        {
          todos.map(todo=>{
          return  <div className='displayResulting' key={todo.id}>
        <p className='para'>{todo.item}</p>
        
        </div>
          })

          }
    
     
  
    </div>
  );
}

export default App;
