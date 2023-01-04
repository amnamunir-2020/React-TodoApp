import React from 'react'
import TodoItem from './TodoItem'

const Todos = (props) => {
  let myStyle={
    minHeight:"100vh",
    margin:"10px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h2 className=" my-3">Todos List</h2> 
      {/* <TodoItem todo={props.todos[0]}/> */}
      {/* Foor Loops through map() Javascript Higher order Method */}
       {props.todos.length===0? "Not Applicable Todo Item!": 
       props.todos.map((todo)=>{
return(
<><TodoItem todo={todo} key={todo.sno}   onDelete={props.onDelete}    />
 
    </>
    
)
 })
       }

    </div>
  )
}

export default Todos
