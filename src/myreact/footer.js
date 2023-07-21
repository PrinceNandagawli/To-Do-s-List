import React from 'react'

export default function footer() {

  let footerstyle={
    position:"sticky",
    top: "135vh",
    width: "100%",
    height:"10px",
    color:"black",
   

  }
  return (
    <footer style={footerstyle}>
<div className="card text-center">
  <div className="card-header">
    Thanks For Using 
  </div>
  <div className="card-body">
    <h5 className="card-title">footer</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go Up</a>
  </div>
  <div className="card-footer">
    copyright@prince2023
  </div>
</div>
</footer>
  )
}
