import React, { useState } from 'react'

export const Add = (props) => {
  const [title, setTitle]= useState("");
  const [desc, setDesc]= useState("");

  const submited=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description cannot be empty"); 
    }
    else{
    props.addlist(title,desc);
    setTitle("");
    setDesc("");
    }

  }
  return (
    <div className="submit" onSubmit={submited}>
      <form className='frms'>
  <div className="mb-3">

    <label htmlFor="Titled1" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Titled1" aria-describedby="titleHelp"/>
    <div id="titleHelp" className="form-text">Add Your Title here.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="desc1" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc1"/>
  </div>
  <button type="submit" className="btn1 btn-primary">Add To My Todo's</button>
</form>
    </div>
  )
}

