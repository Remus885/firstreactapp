import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const TodoItem=({id, item, delItem})=>{
    //console.log(props)

    const [done,setDone]=useState(false)

    return(
        <ListGroup.Item id={id} className="d-flex justify-content-between">
            <FontAwesomeIcon icon="check-square" size="2x" 
                className={done ? "text-success" : "text-secondary"}
                onClick={()=>setDone(!done)}/> 
            <span className={done ? "text-decoration-line-through" : ""}>{item}</span>
            <FontAwesomeIcon icon="trash" size="2x" onClick={()=>delItem(id)} className="text-danger"/> 
        </ListGroup.Item>
    )
}