import React, { Component } from "react"

import Control from "../../components/control/Control"
import Header from "../../components/header/Header"
import Editor from "../../components/editor2/Editor"

import styles from "./Criteria.module.scss"

class Criteria extends Component {
    render() {
        return (
            <>
                <div className={styles.headerContainer}>
                    <Header />
                </div>
                <div className="contentWrapper">
                    <div className="container">
                        <div className={styles.contentContainer}>
                            <div className={styles.editorContainer}>
                                <Editor />
                            </div>
                            <div className={styles.controlContainer}>
                                <Control />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Criteria
