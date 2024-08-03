import React, { useState } from 'react';

const TodoList = () => {

    const [newTodo,setNewTodo] = useState("");
    const [todos,setTodos]= useState([]);

//handle add todo
function handleAddTodo(){
    if(newTodo.trim() !== ''){
        setTodos([...todos,{text:newTodo,completed:false}]);
        // setNewTodo('');
    }
}

//handle toggle between complete and undo
function handleToggleComplete(index){
    const updatedTodos = todos.map((todo,idx)=>idx===index?{
        ...todo,completed: !todo.completed
    }:todo);
    
setTodos(updatedTodos);
}

function handleDelete(index){
    const updatedTodos = todos.filter((_,idx)=>idx !==index);
    setTodos(updatedTodos);
}


  return (
    <div className='container mx-24 p-4'>
      <h1 className='text-2xl font-bold flex items-center justify-center'>Todo List</h1>
      <div>
        <input 
            type="text"
            value={newTodo}
            className='border p-2 w-full'
            onChange={(e)=>setNewTodo(e.target.value)}
            placeholder='Add a new Task'
            />
        <button
            onClick={handleAddTodo}
            className='bg-blue-500 font-bold flex items-center justify-center text-white p-3 w-full mt-2 '
        >
            Add Task
        </button>
      </div>
      <ul className='mt-8'>
        {todos.map((todo,index)=>
            (
                <li
                key={index}
                className={`flex justify-between items-center p-2 
                    ${
                    todo.completed?'line-through':''}`}
                    
                
                >
                    <span className='font-bold mr-4 text-2xl'>{todo.text}</span>
                    <div>
                        <button
                        onClick={()=>handleToggleComplete(index)}
                            className='bg-green-500 rounded-lg text-white p-1 mr-2 '
                        >
                            {todo.completed ? 'Undo':'Complete'}
                        </button>
                        <button
                        onClick={()=>handleDelete(index)}
                            className='bg-red-500 rounded-lg  text-white p-1'
                        >
                            Delete
                        </button>
                    </div>

                </li>
            )

        )}
      </ul>
    </div>
  );
}

export default TodoList;