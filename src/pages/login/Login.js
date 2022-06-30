import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.scss'
import bgImage from '../../assets/img/bg-register.jpg'

class Login extends Component {
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.contentContainer}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.subtitle}>Please login to your account</p>

            <form className={styles.form}>
                <label className={styles.name}>Email Address</label>
                <input className={styles.inputstyle} type="email"/>
                <label className={styles.name}>Password</label>
                <input className={styles.inputstyle} type="password"/>
                <div className={styles.subsection}>
                  {/* <div className={styles.rememberme}>
                    <div className={styles.square}></div>
                    <p className={styles.rm}>Remember me</p>
                  </div> */}
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
        <div className={styles.imageContainer}>
                <img className={styles.sideimg} src={bgImage} alt=""/>
                <h6 className={styles.welcome_back}>Welcome Back</h6>
        </div>
      </div>
    )
  }
}

export default Login