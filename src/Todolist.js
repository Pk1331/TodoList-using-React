import { useState } from "react";
import './App.css';
function Todolist()
{
    let[todo,update]=useState()
    let[Todos,updatetodos]=useState(
            [ 
                {id:1,task:"Learn C"},
                {id:2,task:"Learn C++"},
                {id:3,task:"Learn java"},
                {id:4,task:"Learn python"}

            ]
        ) 
    let newid=5;
    function addnewtodo()
    {
        if(todo==="")
            alert("Please Enter Your Todo..")
        else
        {
            let newtodo=[
                ...Todos,
                {
                   id:newid++,
                   task:todo
                }
            ]
            updatetodos(newtodo)
            update("")

        }
    }
    function deleteTodo(id)
    {
        let dele=Todos.filter(
            (obj)=>
            {
                return obj.id!==id
            }
        )
        updatetodos(dele)
    }
    return(
        <>
          <div className="container mt-4 w-50">
              <h1 className="text-center text-success">Todo-List</h1>
              <div className="input-group">
                  <input type="text" className="form-control" onChange={(eve)=>
                    {
                        let out=eve.target.value
                        update(out)
                    }
                  }
                  value={todo}/>
                  <button className="btn btn-success" onClick={()=>
                    {
                        addnewtodo()
                    }
                  }>Add Todo</button>
              </div>
              <ul className="list-group mt-2">
                {
                    Todos.map(
                        (obj)=>
                        {
                            return(
                                <li className="list-group-item ">
                                      <p>{obj.task}</p>
                                      <button className="btn" onClick={()=>
                                        {
                                            deleteTodo(obj.id)
                                        }
                                      }>X</button>
                                </li>
                            )
                        }
                    )
                }
              </ul>
          </div>
        </>
    )
}
export default Todolist