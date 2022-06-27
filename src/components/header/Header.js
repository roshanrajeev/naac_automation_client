import React, { Component } from 'react'
import styles from './Header.module.scss'

class Header extends Component {
  render() {
    return (
        <div className={styles.header}>
            <form>
                <input type="text" placeholder='Search'/>
            </form>
            <div>
              <p>Full name</p>
              <img src=""/>
            </div>
        </div>
    )
  }
}

export default Header