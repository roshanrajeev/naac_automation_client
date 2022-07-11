import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
// import bgImage from '../../assets/img/bg-register.jpg'

class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.contentContainer}>
            <form className={styles.form}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subtitle}>Please login to your account</p>
                <label className={styles.name}>Email Address</label>
                <input className={styles.inputstyle} type="email"/>
                <label className={styles.name}>Password</label>
                <input className={styles.inputstyle} type="password"/>
                <div className={styles.subsection}>
                  <div>
                  <input type="checkbox" className={styles.square} name="Remember Me" value="yes" id="remember"/>
                  <label for="remember" className={styles.rm} >Remember me</label><br></br>
                  </div>
                <p className={styles.forgetpassword}>Forgot Password?</p>
                </div>
                <button className={styles.login_button}>Login</button>
            </form>
            <p className={styles.register}>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
      </div>
    )
  }
}

export default Login