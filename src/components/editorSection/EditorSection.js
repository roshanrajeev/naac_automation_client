import React, { Component, createRef } from "react"

import TextareaWithControls from "../textareaWithControls/TextareaWithControls"
import Button from "../button/Button"
import Input from "../input/Input"

import styles from "./EditorSection.module.scss"
import variables from "../../assets/styles/mixins.scss"
import DropArrowIcon from "../../assets/img/icons/DropArrow.svg"
import AddIcon from "../../assets/img/icons/Add.svg"
import DeleteIcon from "../../assets/img/icons/Delete.svg"

export class EditorSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sectionActive: false,
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
                <div className={styles.sectionBar}>
                    <div
                        className={styles.nameContainer}
                        onClick={this.handleSectionBarClick}
                    >
                        <img
                            src={DropArrowIcon}
                            className={
                                this.state.sectionActive
                                    ? ""
                                    : styles.dropDownRotated
                            }
                        />
                        <h1 className={styles.name}>Section Title</h1>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            onClick={() => this.props.addSection(this.props.id)}
                        >
                            Add
                        </button>
                        <button
                            onClick={() =>
                                this.props.deleteSection(this.props.id)
                            }
                        >
                            Del
                        </button>
                    </div>
                </div>
                {this.state.sectionActive && (
                    <>
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
