import React from 'react'
import {Items} from "./items";


export const Body = (props) => {
  
  return (
    <div className='container'>
      <h2 className='text-center my'>My Todo's Notes</h2>
      {props.todos.length===0?<h4 className='nolist'>No Todos to display</h4>:
      props.todos.map((todo) =>{
      return( 
        <>
        <Items todo={todo} ondelt={props.ondelt}/>    
        </>)    
      })
    }
    </div>
  )
  
}
