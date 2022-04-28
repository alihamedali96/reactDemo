import { useState,useRef,useEffect } from 'react';
import PortfolioList from './PortfolioList'; // import portfolio.js from said directory
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "portfolioApp.portfolio";

function App() {
  const [portfolio,setPortfolio]= useState([{id:1, name:"Navigation bar", complete: true}, {id:2, name:"Footer", complete: false}]); //object destructuring- the todos is all the todos in our todo state and set todo is the function to update to do

  const todoNameRef = useRef();

  //loading todos - we only call this once, when the web loads
  useEffect (()=>{
    const storedPortfolios = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedPortfolios) setPortfolio(storedPortfolios) //if stored todo is not empty set the todos
  },[]) //since it doesnt have anything, it wont be called again because no componenet will be changed

  //saving todos - anytime a component is changed
  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(portfolio))
  },[portfolio])

  function handleAddTodo(e){
    //gets input text
    const name = todoNameRef.current.value;
    if(name === '' )
    return 
    setPortfolio(prevTodos=>{
      return[...prevTodos,{id:uuidv4() , name:name, complete:false}] //uuid generates random ids 
    }) //set the todos by getting the prev todos and adding after it
    //clear input box
    todoNameRef.current.value = null;
    
  }

  return (
    <>
    {/* we are passing each todo to  */}
    <PortfolioList portfolio = {portfolio} /> 
    <br/>
    <input ref={todoNameRef} type="text"/>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear todo</button>
    <div>0 left to do</div>
    </>
  )

}

export default App;
