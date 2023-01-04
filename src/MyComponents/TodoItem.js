import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger mb-3' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
