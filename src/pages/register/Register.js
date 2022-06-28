import React from 'react'
import styles from './Register.module.scss'
import bgImage from '../../assets/img/bg-register.jpg'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    render() {
        return (
            <div className={styles.container}>
            <div className={styles.register_box}>
                <h2 className={styles.register_title}>Register</h2>
                <h4 className={styles.register_subtitle}>Already registered?<Link to='/login'>Login</Link></h4>
                {/* <div className={styles.register_form}> */}
                    <form className={styles.form}>
                        <div className={styles.nameinput}>
                            <div>
                                <label className={styles.name}>First Name</label>
                                <input className={styles.inputstyle} type="text"/>
                            </div>
                            {/* <br></br> */}
                            <div>
                                <label className={styles.name}>Last Name</label>
                                <input className={styles.inputstyle} type="text"/>
                            </div>
                        </div>
                        {/* <br></br> */}
                        <label className={styles.name}>Email Address</label>
                        <input className={styles.inputstyle} type="email"/>
                        {/* <br></br> */}
                        <label className={styles.name}>Institution</label>
                        <input className={styles.inputstyle} type="text"/>
                        {/* <br></br> */}
                        <label className={styles.name}>Designation</label>
                        <input className={styles.inputstyle} type="text"/>
                        <label className={styles.name}>Department</label>
                        <input className={styles.inputstyle} type="text"/>
                        {/* <br></br> */}
                        <label className={styles.name}>Password</label>
                        <input className={styles.inputstyle} type="password"/>
                        {/* <br></br> */}
                        <div className={styles.register_submit}>
                        <button className={styles.register_button}>Register</button>
                        </div>
                    </form>
                {/* </div> */}
            </div>
            <div className={styles.sidebox}>
                <img className={styles.sideimg} src={bgImage} alt=""/>
                <h6 className={styles.create_account}>Create an Account</h6>
            </div>
        </div>
        )
    }
}

export default Register