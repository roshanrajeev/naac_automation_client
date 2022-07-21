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
            data: [
                { id: uuid(), type: "heading", value: "" },
                { id: uuid(), type: "sub-heading", value: "" },
            ],
        }

        this.handleSectionBarClick = this.handleSectionBarClick.bind(this)
        this.handleParagraphAdd = this.handleParagraphAdd.bind(this)
        this.handleImageAdd = this.handleImageAdd.bind(this)
    }

    /*=================== 
    HANDLERS
    =====================*/
    handleImageAdd(e) {
        const item = {id: uuid(), type: "image", src: ""}
        const data = [...this.state.data]
        data.push(item)
        this.setState({ data })
    }

    handleParagraphAdd(e) {
        const item = {id: uuid(), type: "paragraph", value: ""}
        const data = [...this.state.data]
        data.push(item)
        this.setState({ data })
    }

    
    handleSectionBarClick(e) {
        this.setState((prev) => ({
            ...prev,
            sectionActive: !prev.sectionActive,
        }))
    }

    handleTextChange(e, type, id = null) {
        const data = [...this.state.data]
        const idx = id
        ? data.findIndex((d) => d.type === type && d.id === id)
        : data.findIndex((d) => d.type === type)
        const item = { ...data[idx] }
        item.value = e.target.value
        data[idx] = item
        
        this.setState({ data })
    }

    async handleImageChange(e, id) {
        const file = e.target.files[0]
        console.log(file)
        if(!file) return
        console.log("Size: " + file.size / 1024 / 1024 + "MB")
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }
        const compressedFile = await imageCompression(file, options)
        console.log("Compressed Size: " + compressedFile.size / 1024 / 1024 + "MB")
        const dataURL = await imageCompression.getDataUrlFromFile(compressedFile)
        
        const data = [...this.state.data]
        const idx = data.findIndex((d) => d.type === "image" && d.id === id)
        const item = { ...data[idx] }
        item.src = dataURL
        data[idx] = item
        
        this.setState({ data })
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
                                    this.handleTextChange(e, "heading")
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
                                    this.handleTextChange(e, "sub-heading")
                                }
                            />
                        </div>
                        {this.state.data.map((d) => {
                            if (d.type == "paragraph") {
                                return (
                                    <div className={styles.inputContainer} key={d.id}>
                                        <TextareaWithControls
                                            key={d.id}
                                            placeholder="Enter some text"
                                            label="Paragraph"
                                            value={d.value}
                                            onChange={(e) =>
                                                this.handleTextChange(
                                                    e,
                                                    "paragraph",
                                                    d.id
                                                )
                                            }
                                        />
                                    </div>
                                )
                            }
                            if(d.type == "image") {
                                return (
                                    <div className={styles.inputContainer} key={d.id}>
                                        <Input
                                            type="file"
                                            label="Image"
                                            accept="image/png, image/jpeg"
                                            onChange={(e) => this.handleImageChange(e, d.id)}
                                        />
                                        {d.src && 
                                            <div className={styles.imageContainer}>
                                                <img src={d.src} className={styles.image}/>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        })}
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
