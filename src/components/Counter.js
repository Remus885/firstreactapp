import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Counter=()=>{
    const [count,setCount]=useState(0)

    return(
        <section className="row bg-secondary text-white justify-content-center">
           <h3 className='w-100'>Counter</h3>
           <div className="col-md-2 p-2">
                <Button className="" variant="success" onClick={()=>setCount(count+1)}>
                    <FontAwesomeIcon icon="plus-square" size="2x" />
                </Button>
           </div>
           <div className="col-md-2 p-2">
                <p>A számláló értéke: <b>{count}</b></p>
           </div>
           <div className="col-md-2 p-2">
                <Button className="" variant="danger" onClick={()=>setCount(count-1)}>
                    <FontAwesomeIcon icon="minus-square" size="2x" />
                </Button>
           </div>
        </section>
    )
}