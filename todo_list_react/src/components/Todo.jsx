import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../css/todo.css'


function Todo({ todo , onRemoveTodo, onUpdateTodo }) {
  const {id, content} = todo;

  const removeTodo = () => {
    onRemoveTodo(id)
  }

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo
    }
    onUpdateTodo(request);
    setEditable(false);
  }


  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  return (
    <div className='todo'>
        <div>
          {
            editable ? <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-edit-input' /> : content
          }
        </div>
        <div>
          {
            editable ? <FaCheck className='todo-icons' onClick={updateTodo} />
             : <MdEdit className='todo-icons' onClick={() => setEditable(true)}/>
          }
            
            <MdDeleteForever className='todo-icons' onClick={removeTodo}/>
            
        </div>
    </div>
  )
}

export default Todo