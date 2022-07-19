import React, { Component } from 'react'
import styles from './Input.module.scss'

class Input extends Component {
  render() {
    const {type = "text", placeholder = "", label = "Label"} = this.props

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={type} placeholder={placeholder}/>
        </div>
    )
  }
}

export default Input