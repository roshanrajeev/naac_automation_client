import React, { Component, createRef } from "react"

import TextareaWithControls from "../textareaWithControls/TextareaWithControls"
import Button from "../button/Button"
import Input from "../input/Input"

import styles from "./EditorSection.module.scss"
import variables from "../../assets/styles/mixins.scss"
import DropArrowIcon from "../../assets/img/icons/DropArrow.svg"
import AddIcon from "../../assets/img/icons/Add.svg"
import DeleteIcon from "../../assets/img/icons/Delete.svg"
import EditorSectionBar from "../editorSectionBar/EditorSectionBar"

export class EditorSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sectionActive: false,
            heading: "",
        }

        this.handleSectionBarClick = this.handleSectionBarClick.bind(this)
    }

    /*=================== 
    HANDLERS
    =====================*/
    handleImageAdd(e) {
        console.log("image add")
    }

    handleParagraphAdd(e) {
        console.log("paragraph add")
    }

    handleSectionBarClick(e) {
        this.setState((prev) => ({
            ...prev,
            sectionActive: !prev.sectionActive,
        }))
    }

    /*===================
    RENDER
    =====================*/

    render() {
        return (
            <div>
                <EditorSectionBar 
                    active={this.state.sectionActive}
                    addSection={this.props.addSection}
                    deleteSection={this.props.deleteSection}
                    toggleSection={this.handleSectionBarClick}
                    id={this.props.id}
                />
                {this.state.sectionActive && (
                    <>
                        <div className={styles.inputContainer}>
                            <Input
                                type="text"
                                label="Heading"
                                placeholder="Enter heading"
                                name="heading"
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <Input
                                type="text"
                                label="Sub Heading"
                                placeholder="Enter sub-heading"
                                name="sub-heading"
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
                                <Button
                                    size="small"
                                    color={variables.color_blue}
                                    onClick={this.handleParagraphAdd}
                                >
                                    Add Paragraph +
                                </Button>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    size="small"
                                    color={variables.color_blue}
                                    onClick={this.handleImageAdd}
                                >
                                    Add Image +
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    }
}

export default EditorSection
