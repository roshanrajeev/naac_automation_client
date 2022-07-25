import React, { Component } from "react"
import { Link } from "react-router-dom"
import styles from "./Login.module.scss"
import Nav from "../navbar/Navbar"
import withNavigate from "../../utils/withNavigate"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async handleSubmit(e) {
        e.preventDefault()

        const result = await fetch("http://localhost:8000/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        if (!result.ok) {
            console.log("Not Logined")
            return
        }
        console.log("Login Successful")
        const data = await result.json()
        console.log(data)
        return this.props.navigate("/criteria")  
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className={styles.container}>
                <Nav />
                <div className={styles.login_box}>
                    <h1 className={styles.login_text}>Login</h1>
                    <form
                        className={styles.login_form}
                        onSubmit={this.handleSubmit}
                    >
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

export default withNavigate(Login)
