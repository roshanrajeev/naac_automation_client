import React from "react"
import styles from "./Register.module.scss"
import { Link } from "react-router-dom"
import Nav from "../navbar/Navbar"
import Button from "../../components/button/Button"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const result = await fetch("http://localhost:8000/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
<<<<<<< HEAD
        console.log(result)
=======
>>>>>>> 045e7e83134faa32d2bb2cd57a7e00378caa0915
        if (!result.ok) {
            console.log("Not Registered")
            return
        }
        console.log("Registered")
        const data = await result.json()
        console.log(data)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className={styles.container}>
                <Nav />
                <div className={styles.register_box}>
                    <h1 className={styles.register_text}>Register</h1>
                    <form
                        className={styles.register_form}
                        onSubmit={this.handleSubmit}
                    >
                        <div className={styles.name}>
                            <div className={styles.firstname}>
                                <label className={styles.label}>
                                    First Name
                                </label>
                                <input
                                    className={styles.inputstyle}
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter Firstname"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className={styles.lastname}>
                                <label className={styles.label}>
                                    Last Name
                                </label>
                                <input
                                    className={styles.inputstyle}
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter Lastname"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        {/* Email */}
                        <label className={styles.label}>Email</label>
                        <input
                            className={styles.inputstyle}
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={this.handleChange}
                        />
                        {/* Password */}
                        <label className={styles.label}>Password</label>
                        <input
                            className={styles.inputstyle}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={this.handleChange}
                        />
                        {/* Confirm Password */}
                        <label className={styles.label}>Confirm Password</label>
                        <input
                            className={styles.inputstyle}
                            type="password"
                            name="password2"
                            placeholder="Re-enter Password"
                            onChange={this.handleChange}
                        />
                        <button className={styles.submit_button} type="submit">
                            Submit
                        </button>
                        {/* <Button size="medium" type="filled" color="#000">Submit</Button> */}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
