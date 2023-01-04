import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { TodoItem } from './MyComponents/TodoItem';
import React, { useState, useEffect, useInsertionEffect } from 'react';
import style from './MyComponents/style.css';
import { cleanup } from '@testing-library/react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }




  const onDelete = (todo) => {
    console.log("I Am onDelete", todo);
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    //Add code!
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    console.log("I Am Added!", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }


    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);



    //  if(localStorage.getItem("todos")){
    //   localStorage.setItem("todos",JSON.stringify(todos));
    //  }

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Header title="My Todo App" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />


    </>
  );
}

export default App;
