import React, { Component } from "react"
import styles from "./TextareaWithControls.module.scss"
import TextareaAutosize from "react-textarea-autosize"

class TextareaWithControls extends Component {
    render() {
        const { type = "text", placeholder = "", label = "Label" } = this.props

        return (
            <div className={styles.container}>
                <div className={styles.labelAndControlsContainer}>
                    <div className={styles.labelContainer}>
                        <label className={styles.label}>{label}</label>
                    </div>
                    <div className={styles.controlsContainer}>
                        <button>Down</button>
                        <button>Up</button>
                        <button>Del</button>
                    </div>
                </div>
                <TextareaAutosize
                    className={styles.textarea}
                    minRows="4"
                    placeholder={placeholder}
                />
            </div>
        )
    }
}

export default TextareaWithControls
