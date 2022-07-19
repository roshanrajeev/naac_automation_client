import React, { Component } from 'react'
import Input from '../input/Input'
import TextareaWithControls from '../textareaWithControls/TextareaWithControls'
import styles from './EditorSection.module.scss'
import Button from "../button/Button"
import variables from "../../assets/styles/mixins.scss"

export class EditorSection extends Component {
    constructor(props) {
        super(props)
    }

    /*=================== 
    HANDLERS
    =====================*/
    handleImageAdd() {
        console.log("image add")
    }

    handleParagraphAdd() {
        console.log("paragraph add")
    }

    /*===================
    RENDER
    =====================*/

  render() {
    return (
        <div>
            <div className={styles.sectionBar}>
                <div className={styles.nameContainer}>
                    <span>&lt;</span>
                    <h1 className={styles.name}>Section Title</h1>
                </div>
                <div className={styles.buttons}>
                    <button>Add</button>
                    <button>Del</button>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <Input
                    type="text"
                    label="Heading"
                    placeholder="Enter heading"
                />
            </div>
            <div className={styles.inputContainer}>
                <TextareaWithControls
                    placeholder="Enter some text"
                    label="Paragraph"
                />
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.button}>
                    <Button size="small" color={variables.color_blue} onClick={this.handleParagraphAdd}>Add Paragraph +</Button>
                </div>
                <div className={styles.button}>
                    <Button size="small" color={variables.color_blue} onClick={this.handleImageAdd}>Add Image +</Button>
                </div>
            </div>
        </div>
    )
  }
}

export default EditorSection