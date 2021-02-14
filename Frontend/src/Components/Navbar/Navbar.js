import React from 'react';
import "./Navbar.css"


const Navbar = ({logout,score,cur_page }) => {
  return (
    <div>
        <ul>
            <li className = "active" onClick = {logout} >Sign out</li>
            <li className = "active1" onClick = {score} >Score Board</li>
            <li className = "active2" onClick = {cur_page} >Main page</li>

           
        </ul>

    </div>
  );
}

export default Navbar;