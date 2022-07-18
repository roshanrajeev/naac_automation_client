import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

class Navbar extends Component{
    render(){
        return(
            <nav className={styles.navbar_container}>
               <div className={styles.navbar_title}>
                <h2 className={styles.navbar_heading}>NAAC Automation</h2>
               </div>
               <div>
                <ul className={styles.navbar_list}>
                <li className={styles.navbar_button}><p><Link className={styles.navbar_button_text} to='/register'>Register</Link></p></li>
                <li className={styles.navbar_button}><p><Link className={styles.navbar_button_text} to='/login'>Login</Link></p></li>
                </ul>
               </div>
            </nav>
        )
    }
}

export default Navbar