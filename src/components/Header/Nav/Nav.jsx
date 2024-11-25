import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return <nav className="nav_generic">
    <ul className='nav'>
      <li className="nav-link active"><Link to='/'>Home</Link></li>
      <li className="nav-link active"><Link to='/new'>New Pokemon</Link></li>
    </ul >
  </nav>;
};

export default Nav;
