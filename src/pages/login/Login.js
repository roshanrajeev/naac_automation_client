import React, { Component, useContext } from "react"
import { Link } from "react-router-dom"
import styles from "./Login.module.scss"
import Nav from "../navbar/Navbar"
import withNavigate from "../../utils/withNavigate"
import { AuthContext } from "../../auth/authContext"
import { whoami } from "../../requests/requests"

class Login extends Component {
    static contextType = AuthContext

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

        const { user, setUser } = this.context

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

        localStorage.setItem("token", data.token)
        const userRes = await whoami(data.token)
        if(!userRes.ok) {
            console.log("Not logged in")
            return
        }
        const userData = await userRes.json()
        userData["token"] = data.token
        await setUser(userData)
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
