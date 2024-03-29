import React, { Component, createRef } from "react"
import Header from "../../components/header/Header"
import toDocx from "../../utils/toDocx"
import styles from "./Preview.module.scss"
import withRouter from "../../utils/withRouter"
import { renderAsync } from "docx-preview"
import Button from "../../components/button/Button"
import variables from "../../assets/styles/mixins.scss"
import "./Preview.scss"
import { Link } from "react-router-dom"
export class Preview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: "",
        }
        this.preview = createRef()
    }
    componentDidMount() {
        const asyncFunc = async (title, sections) => {
            const blob = await toDocx(title, sections)
            await renderAsync(blob, this.preview.current, this.preview.current)
        }
        const { id } = this.props.params
        const json = window.localStorage.getItem(id)
        if (!json) return
        const data = JSON.parse(json)
        const title = data["title"]
        const sections = data["sections"]
        asyncFunc(title, sections)
    }
    render() {
        return (
            <div>
                <div className={styles.headerContainer}>
                    <Header />
                </div>
                <div className="container">
                    <div className={styles.navigationLink}>
                        <Link to={`/indicator/${this.props.params.id}`}>&#8592; Back to Editor</Link>
                    </div>
                    <div className={styles.topBarContainer}>
                        <h1 className={styles.title}>Main Heading</h1>
                        <Button
                            type="filled"
                            color={variables.color_yellow}
                            size="small"
                        >
                            Download
                        </Button>
                    </div>
                    <div ref={this.preview} className={styles.preview}></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Preview)
