import React, { Component, createRef } from "react"
import { v4 as uuid } from "uuid"
import imageCompression from "browser-image-compression"

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
        }

        this.handleSectionBarClick = this.handleSectionBarClick.bind(this)
    }

    /*=================== 
    HANDLERS
    =====================*/

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
                                onChange={(e) =>
                                    this.props.changeText(e, "heading")
                                }
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <Input
                                type="text"
                                label="Sub Heading"
                                placeholder="Enter sub-heading"
                                name="sub-heading"
                                onChange={(e) =>
                                    this.props.changeText(e, "sub-heading")
                                }
                            />
                        </div>
                        {this.props.data.map((d) => {
                            if (d.type == "paragraph") {
                                return (
                                    <div
                                        className={styles.inputContainer}
                                        key={d.id}
                                    >
                                        <TextareaWithControls
                                            key={d.id}
                                            placeholder="Enter some text"
                                            label="Paragraph"
                                            value={d.value}
                                            onChange={(e) =>
                                                this.props.changeText(
                                                    e,
                                                    "paragraph",
                                                    d.id
                                                )
                                            }
                                        />
                                    </div>
                                )
                            }
                            if (d.type == "image") {
                                return (
                                    <div
                                        className={styles.inputContainer}
                                        key={d.id}
                                    >
                                        <Input
                                            type="file"
                                            label="Image"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) =>
                                                this.props.changeImage(e, d.id)
                                            }
                                        />
                                        {d.src && (
                                            <div
                                                className={
                                                    styles.imageContainer
                                                }
                                            >
                                                <img
                                                    src={d.src}
                                                    className={styles.image}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        })}
                        <div className={styles.buttonsContainer}>
                            <div className={styles.button}>
                                <Button
                                    size="small"
                                    color={variables.color_blue}
                                    onClick={this.props.addParagraph}
                                >
                                    Add Paragraph +
                                </Button>
                            </div>
                            <div className={styles.button}>
                                <Button
                                    size="small"
                                    color={variables.color_blue}
                                    onClick={this.props.addImage}
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
