import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
  
  return (

<div className="navbar">
  <li className='name'>Task List</li>
<ul>

    <li><i className="fas fa-home"></i><Link to="/"> Home</Link></li>
    <li><i class="fas fa-user"></i><Link to="/login"> Login</Link></li>
    <li><i class="fas fa-info-circle"></i><Link to="/about"> About</Link></li>
    <li><i class="fas fa-hands-helping"></i><Link to="#"> Help & support</Link></li>
</ul>
</div>
  );
}
