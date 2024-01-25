import './App.css';
import Header from "./myreact/header";
import { Body } from "./myreact/body";
import Footer from "./myreact/footer";
import { Add } from "./myreact/add";
import { About } from "./myreact/about";
import { Login } from "./myreact/login";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  let initlist;

  if (localStorage.getItem('todos') === null) {
    initlist = [];
  }
  else {
    initlist = JSON.parse(localStorage.getItem('todos'));
  }
  const ondelt = (todo) => {
    console.log("deleted successfully", todo);
    setTodos(todos.filter((e) => {

      return e !== todo;
    }));


    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addlist = (title, desc) => {
    console.log("Todo Added", title, desc)
    let srno;
    if (todos.length === 0) {
      srno = 1;
    }
    else {
      srno = todos[todos.length - 1].srno + 1;
    }

    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initlist);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onsub=(submits)=> {
    console.log("submited successfully", submits);
  }
  return (
    <>
      <Router>
        <Header title="My Todos" />
        <Routes>
          <Route exact path="/#" element={
              <>
                <Add addlist={addlist} />
                <Body todos={todos} ondelt={ondelt} />
                </>
          }>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/login" element={<Login/>}>
          </Route>
        </Routes>


        <Footer />
      </Router>
    </>


  );
}

export default App;
