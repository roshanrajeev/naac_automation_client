import React, { Component } from "react"
import Header from "../../components/header/Header"
import styles from "./Home.module.scss"
import fileIcon from "../../assets/img/file.png"
import editIcon from "../../assets/img/edit.png"
import deleteIcon from "../../assets/img/delete.png"

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "blessey",
        }

        this.someFunc = this.someFunc.bind(this)
    }

    someFunc() {
        this.setState({ name: "Roshan" })
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.headerWrapper}>
                    <Header />
                </div>
                <div className={`container ${styles.container}`}>
                    <h1 className={styles.heading}>Create your NAAC documents with ease!</h1>
                </div>
            </div>
        )
    }
}

export default Home
