import React from "react"
import styles from "./Register.module.scss"
import { Link } from "react-router-dom"
import Nav from "../navbar/Navbar"
class Register extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Nav />
                <div className={styles.register_box}>
                    <h1 className={styles.register_text}>Register</h1>
                    <form className={styles.register_form}>
                        <div className={styles.name}>
                            <div className={styles.firstname}>
                                <label className={styles.label}>
                                    First Name
                                </label>
                                <input
                                    className={styles.inputstyle}
                                    type="text"
                                    placeholder="Enter Firstname"
                                />
                            </div>
                            <div className={styles.lastname}>
                                <label className={styles.label}>
                                    Last Name
                                </label>
                                <input
                                    className={styles.inputstyle}
                                    type="text"
                                    placeholder="Enter Lastname"
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <label className={styles.label}>Email</label>
                        <input
                            className={styles.inputstyle}
                            type="email"
                            placeholder="Enter Email"
                        />
                        {/* Password */}
                        <label className={styles.label}>Password</label>
                        <input
                            className={styles.inputstyle}
                            type="password"
                            placeholder="Enter Password"
                        />
                        {/* Confirm Password */}
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            className={styles.inputstyle}
                            type="password"
                            placeholder="Re-enter Password"
                        />
                        <button className={styles.submit_button} type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
