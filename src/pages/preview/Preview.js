import React, { Component, createRef } from 'react'
import Header from '../../components/header/Header'
import toDocx from '../../utils/toDocx'
import styles from "./Preview.module.scss"
import withRouter from '../../utils/withRouter'
import { renderAsync } from 'docx-preview'
import Button from '../../components/button/Button'
import variables from "../../assets/styles/mixins.scss"
import "./Preview.scss"

export class Preview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
        this.preview = createRef()
    }
    componentDidMount() {
        const asyncFunc = async (sections) => {
            const blob = await toDocx(sections)
            await renderAsync(blob, this.preview.current, this.preview.current)
        }
        const {id} = this.props.params
        const json = window.localStorage.getItem(id)
        if(!json) return
        const sections = JSON.parse(json)
        asyncFunc(sections)
    }
  render() {
    return (
      <div>
        <div className={styles.headerContainer}>
            <Header/>
        </div>
        <div className='container'>
            <div className={styles.topBarContainer}>
                <h1 className={styles.title}>Main Heading</h1>
                <Button type="filled" color={variables.color_yellow} size="small">Download</Button>
            </div>
            <div ref={this.preview} className={styles.preview}></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Preview)