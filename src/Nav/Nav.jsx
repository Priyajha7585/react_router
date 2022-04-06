import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <>
    <nav>
        <div>
        <ul className='nav'>
            <li>
                <Link exact="/" to="/">Home</Link>
            </li>
            <li>
                <Link to="/product1">ProductOne</Link>
            </li>
            <li>
                <Link to="/product2">ProductTwo</Link>
            </li>
            <li>
                <Link to="/product3">ProductThree</Link>
            </li>
            <li>
                <Link to="/product4">ProductFour</Link>
            </li>
        </ul>
        </div>
    </nav>
        
    </>
  )
}

export default Nav