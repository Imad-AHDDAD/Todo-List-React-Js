import React , { useEffect, useState } from 'react';
import './App.css';
// import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // state stuff
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status , setStatus] = useState("all");
  const [filteredTodos , setFilteredTodos] = useState([]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Run ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  } , [])

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocaltodos();
  },[todos,status])


  // save to local
  const saveLocaltodos = () => {
    localStorage.setItem("todos" ,JSON.stringify(todos));
  }

  // get localTodos
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos" , JSON.stringify([]));
    }else{
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Imad's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
    
  );
}

export default App;
