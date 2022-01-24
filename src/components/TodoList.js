import React,{useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { TodoItem } from './TodoItem'

export const TodoList=(props)=>{
    //console.log(props.data)
    const [todos,setTodos] =useState(props.data)
    const [todo,setTodo]=useState('')

    const addTodo =(e)=>{
        e.preventDefault()
        const index=todos.length+1
        setTodos([...todos,{id:index,item:todo}])
        setTodo('')
    }
    
    const delItem=(id)=>{
        const newTodos=todos.filter(obj=>obj.id!=id)
        setTodos(newTodos)
    }

    return(
        <section>
            <h1>My Todos</h1>
            <form className="row justify-content-center ">   
                <div className="col-md-6 gx-0">
                    <input type="text" className="form-control h-100" placeholder="add todo..." value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
                </div>             
                <div className="col-1">
                    <button className="btn btn-success" onClick={(e)=>addTodo(e)} disabled={!todo}>
                        <FontAwesomeIcon icon="plus-square" size="2x" />
                    </button>
                </div>
                <div className="col-1">
                    <button className="btn btn-danger" onClick={(e)=>addTodo(e)}>
                        <FontAwesomeIcon icon="trash" size="2x" />
                    </button>
                </div>
            </form>

            <ListGroup className="p-2">
                {todos.map(obj=><TodoItem key={obj.id} {...obj} delItem={delItem}/>)}
                {/*todos.map(obj=><TodoItem key={obj.id} id={obj.id} item={obj.item} />)*/}
            </ListGroup>
        </section>
    )
}