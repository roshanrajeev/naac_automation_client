import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.scss'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar_container">
               <div className="navbar_title">
                <h2 className="navbar_heading">NAAC Automation</h2>
               </div>
               <div>
                <ul className='navbar_list'>
                <li className='navbar_button'><p><Link className='navbar_button_text' to='/register'>Register</Link></p></li>
                <li className='navbar_button'><p><Link className='navbar_button_text' to='/login'>Login</Link></p></li>
                </ul>
               </div>
            </nav>
        )
    }
}

export default Navbar