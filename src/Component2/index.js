 import "./style.css"


const Todolist = ({name,todo,setdata2,data2}) =>{
    

    console.log(setdata2)
    const DeleteHandler = ()=>{
     
         setdata2(data2.filter((el) => el.id !== todo.id))
  }
 
 
    return(
        <div className="todolist2">
    <div className="todolist">
     
 <p >  {name} </p>   
       

 
     
        <button   onClick={DeleteHandler}>Del</button>
        </div>
        </div>
 
    )
}
    
    export default Todolist ; 


 