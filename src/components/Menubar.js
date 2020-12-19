import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
   return (
      <div className="menu">
         <NavLink className="nav-links" to="../user1">User 1</NavLink>
         <NavLink className="nav-links" to="../user2">User 2</NavLink>
      </div>
   );
}

export default Navigation;