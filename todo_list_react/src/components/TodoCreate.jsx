import React, { useState } from 'react'

function TodoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if(!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo
    }
    onCreateTodo(request);
    createInput();
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      createTodo();
      createInput()
    }
  }

  const createInput = () => {
    setNewTodo('');
  }
  


  return (
    <div className='todo-create'>
        <div style={{width:'100%'}}>
            <input type="text" placeholder='Enter Todo' className='todo-input' value={newTodo} onKeyDown={handleKeyDown} onChange={(e)=>setNewTodo(e.target.value)}/>
        </div>
        <div>
           <button className='todo-add-btn' onClick={createTodo}>Add Todo</button>
        </div>
    </div>
  )
}

export default TodoCreate