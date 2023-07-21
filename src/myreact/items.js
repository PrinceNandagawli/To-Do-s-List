import React from 'react'

export const Items = ({todo , ondelt}) => {


  return (
    <div>
      <div className='itemsadd'>
      <h4 className='sr_no'>Sr.No : {todo.srno}</h4>
      <h5 className='title'>TITLE : {todo.title}</h5>
      <p className='desc'>DESCRIPTION : {todo.desc}</p>
      </div>
      <button className='btn btn-danger' onClick={()=>{ondelt(todo)}}>Delete</button>
    </div>
  )
}
