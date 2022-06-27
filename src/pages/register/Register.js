import React from 'react'
import styles from './Register.module.scss'

class Register extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="register-box">
                <h2 className="register-title">Register</h2>
                <h4 className="register-subtitle">Already registered? <a href="login.html">Login</a></h4>
                <div className="register-form">
                <form className={styles.form}>
                <label>First Name</label>
                <input type="text"/>
                <label>Last Name</label>
                <input type="text"/>
                <label>Email Address</label>
                <input type="email"/>
                <label>Password</label>
                <input type="password"/>
                <p>Forgot Password?</p>
                <button>Login</button>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </form>
                </div>
            </div>
            <div class="sidebox">
                <img class="sideimg" src="img/4063097.jpg"/>
            </div>
        </div>
        )
    }
}

export default Register