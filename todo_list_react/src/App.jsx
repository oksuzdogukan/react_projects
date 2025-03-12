import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import './css/todo-create.css'

function App() {

  const [todos, setTodos] = useState([]);
  

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id!==todoId)])

  }
  
  const updateTodo = (newTodo) =>{
    const updateTodos = todos.map((todo) => {
      if(todo.id!=newTodo){
        return newTodo;
      }else return todo;
    })

    setTodos([...updateTodos]);

  }


  return (
    <div className='App'>
      <div className='main'>
        <TodoCreate onCreateTodo={createTodo}/>
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo}/>
      </div>
      
      
    </div>
  )
}

export default App
