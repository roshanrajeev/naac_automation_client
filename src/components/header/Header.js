import React, { Component } from 'react'
import styles from './Header.module.scss'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className={styles.container}>
          <h1 className={styles.title}>NAAC Automation</h1>
          <ul className={styles.links}>
            <li className={styles.link}><Link to="#">Home</Link></li>
            <li className={styles.link}><Link to="#">Criteria</Link></li>
            <li className={styles.link}><Link to="#">Profile</Link></li>
            <li><Button size="medium" type="outlined" color="#fff">Logout</Button></li>
          </ul>
        </div>
    )
  }
}

export default Header