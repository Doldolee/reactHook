import logo from './logo.svg';
import './App.css';
import {React, useState} from "react"


// 2. useInput_Hooks
/*const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event =>{
    const {target: {value}} = event;
    let willUpdate = true;
    if(typeof validator === "function"){
      willUpdate = validator(value);
    }
    if(willUpdate){
      setValue(value);
    }
  };
  return {value, onChange}
}*/

const content = [
  {
    tab: "section 1",
    content: " i'm the content of the section 1"
  },
  {
    tab: "section 2",
    content: " i'm the content of the section 2"
  },
]
function App() {
  
  /*  1. useState_Hooks
  const [item, setItem] = useState(1)
  const incrementItem = ()=> setItem(item +1);
  const decrementItem = ()=> setItem(item -1);*/
  
  /*  2. useInput_Hooks
  const maxLen = (value)=> value.length < 10
  const name = useInput("MR.", maxLen)*/
  
  return (
    <div>
      {content.map(section => (<button>{section.tab}</button>))}
    
      {/* 2. useInput_Hooks
      <input placeholder="Name" {...name}/> */}
     
      

      {/* 1. useState_Hooks
      <h1>hello{item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>increment</button>  */}
    </div>
  );
}

export default App;
