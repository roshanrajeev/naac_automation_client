import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'


class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.contentContainer}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subtitle}>Please login to your account</p>

            <form className={styles.form}>
                <label>Email Address</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <p>Forgot Password?</p>
                <button>Login</button>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
        </div>
        <div className={styles.imageContainer}>
        </div>
      </div>
    )
  }
}

export default Login