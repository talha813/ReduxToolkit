import React, {useState } from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { addtodolist,removetodolist } from '../state/counterSlice';
    export default function ToDoList(){
        const [add,setAdd]=useState("");
        const dispatch=useDispatch();
      const selectTodo = useSelector((state) => state.counter.todo)
      
        function dispatched()
        {
             dispatch(addtodolist({"text":add}));
        }      
    return (
        <div style={{width: "100%"}}> 
            <div><input type="text" value={add} onChange={(e)=>setAdd(e.target.value)}/> <button onClick={()=>{dispatched()}}>Add</button></div>
             {
                selectTodo.map((val,index)=>
                {
                    return ( <div style={{width:"100%",backgroundColor:"blue",marginTop:"10px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <p style={{flex:"10"}}>
                         {val.text}
                    </p>
                    <button style={{height:"20px"}} onClick={()=>{dispatch(removetodolist(index))}} >
                        Delete
                    </button>
                    </div>)
                })
             }
        </div>
  )
}
