import logo from './logo.svg';
import Todo from "./Component1"
// import Todolist from "./Component2"

import { useState } from "react"

import "./App.css"
function App() {
  const [data,SetData] = useState("")

  const [data2,SetData2] = useState([])




  return (
    <div className="App">


 
 <Todo data={data} setdata={SetData} data2={data2} SetData2={SetData2}/>



    </div>
  );
}

export default App;
