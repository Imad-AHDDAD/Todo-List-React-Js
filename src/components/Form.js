import React from "react";

const Form = ({inputText,setInputText,todos,setTodos,status,setStatus}) => {

   const inputTextHandler = (e)=>{
      setInputText(e.target.value)
   }

   const submitTodoHandler = (e) => {
      e.preventDefault();
      if(inputText !== ""){
         setTodos([...todos , {text: inputText , completed: false , id: Math.random() * 1000} ]);
      }
      setInputText("");
   }

   const statusHandler = (e) => {
      setStatus(e.target.value)
   }


   return (
      <form>
         <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
         <button className="todo-button" onClick={submitTodoHandler} type="submit">
            <i className="fas fa-plus-square"></i>
         </button>
         <div className="select">
            <select value={status} onChange={statusHandler} name="todos" className="filter-todo">
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
}

export default Form;