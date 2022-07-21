import React, { Component } from "react"
import styles from "./Input.module.scss"

class Input extends Component {
    render() {
        const { type = "text", placeholder = "", label = "Label", name = "", onChange = () => {} } = this.props

        return (
            <div className={styles.container}>
                <label className={styles.label}>{label}</label>
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                />
            </div>
        )
    }
}

export default Input
