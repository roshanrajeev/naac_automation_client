import React, { Component } from "react"
import EditorSection from "../editorSection/EditorSection"
import Input from "../input/Input"
import styles from "./Editor.module.scss"

export class Editor extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <Input
                        type="text"
                        label="Title"
                        placeholder="Enter Heading"
                    />
                </div>
                <section className={styles.section}>
                    <EditorSection />
                </section>
            </div>
        )
    }
}

export default Editor
