import { useState } from "react"
import Todolist from "../Component2"
import "./todo.css" 
const Todo = ({data,setdata,data2,SetData2}) => {

// const EnterDown =(e)=>{
 
 
// if (e.keyCode === 13)
// {
//   SetData2([...data2,{text:data ,id:Math.round(Math.random()* 1000) }])
// }
// setdata(""); 

// }
  

    const typing = (e)=>{
        setdata(e.target.value)
    }
 

    const submitHandler = (e) =>{
      e.preventDefault();
   if(data === "")
 {

console.log("enter something")

 }
 else
  {
  SetData2([...data2,{text:data ,id:Math.round(Math.random()* 1000) }])
}
setdata(""); 
 
}

//  const DeleteHandler = ()=>{
//     SetData(data2.filter((el) => el.id !== data2.id))
//  }

 

    return(
    <div className="Hero"><center>
        <h1>Today's task</h1>
    <input type="text" value={data}
    onChange={typing}

  
    /> 
     
    
    <button onClick={submitHandler}   >click me </button></center>
 { 
    
 
data2.map((any)=>(

    <Todolist name={any.text} todo={any}  setdata2={SetData2} data2={data2}   />

))}       



 

     {/* <Todolist names={named}     /> */}

    </div>
)

}  
export default Todo 