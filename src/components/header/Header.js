import React, { Component } from 'react'
import styles from './Header.module.scss'

class Header extends Component {
  render() {
    return (
        <div className="container">
          <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.input} type="text" placeholder='Search'/>
            </form>
            <div className={styles.user}>
              <p className={styles.name}>Full name</p>
              <span className={styles.imageContainer}>
                <img className={styles.image} src="https://randomuser.me/api/portraits/men/2.jpg"/>
              </span>
            </div>
          </div>
        </div>
    )
  }
}

export default Header