import React, { Component } from "react"

import Control from "../../components/control/Control"
import Header from "../../components/header/Header"
import Editor from "../../components/editor2/Editor"

import styles from "./KeyIndicator.module.scss"

class KeyIndicator extends Component {
    constructor(props) {
        super(props)

        this.handleDocDownload = this.handleDocDownload.bind(this)
    }

    handleDocDownload() {
        
    }

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
                                <Control downloadDoc={this.handleDocDownload}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default KeyIndicator
