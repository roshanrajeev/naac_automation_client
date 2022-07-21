import React, { Component } from "react"
import { v4 as uuid } from "uuid"
import Button from "../button/Button"
import imageCompression from "browser-image-compression"
import produce from "immer"

import EditorSection from "../editorSection/EditorSection"
import Input from "../input/Input"

import variables from "../../assets/styles/mixins.scss"
import styles from "./Editor.module.scss"

export class Editor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: [],
        }

        this.handleSectionAdd = this.handleSectionAdd.bind(this)
        this.handleSectionDelete = this.handleSectionDelete.bind(this)
    }

    getNewSection = () => ({ id: uuid(), data: [] })

    handleSectionAdd(id) {
        const idx = this.state.sections.findIndex(
            (section) => section.id === id
        )
        const newSection = this.getNewSection()
        this.setState((prev) => {
            const newSections = [...prev.sections]
            newSections.splice(idx + 1, 0, newSection)

            return {
                ...prev,
                sections: newSections,
            }
        })
    }

    handleSectionDelete(id) {
        this.setState((prev) => {
            const newSections = prev.sections.filter(
                (section) => section.id !== id
            )
            return {
                ...prev,
                sections: newSections,
            }
        })
    }

    handleImageAdd(e, sectionId) {
        const sectionIdx = this.state.sections.findIndex(section => section.id == sectionId)
        const item = {id: uuid(), type: "image", src: ""}

        this.setState(produce(draftState => {
            draftState.sections[sectionIdx].data.push(item)
        }))
    }

    handleParagraphAdd(e, sectionId) {
        const sectionIdx = this.state.sections.findIndex(section => section.id == sectionId)
        const item = {id: uuid(), type: "paragraph", value: ""}
        
        this.setState(produce(draftState => {
            draftState.sections[sectionIdx].data.push(item)
        }))
    }

    handleTextChange(e, sectionId, type, id = null) {
        const sectionIdx = this.state.sections.findIndex(section => section.id == sectionId)
        const section = this.state.sections[sectionIdx]
        
        const idx = id
        ? section.data.findIndex((d) => d.type === type && d.id === id)
        : section.data.findIndex((d) => d.type === type)
        
        this.setState(produce(draftState => {
            draftState.sections[sectionIdx].data[idx].value = e.target.value
        }))
    }

    async handleImageChange(e, id, sectionId) {
        const file = e.target.files[0]
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
        
        const sectionIdx = this.state.sections.findIndex(section => section.id == sectionId)
        const section = this.state.sections[sectionIdx]
        
        const idx = section.data.findIndex((d) => d.type === "image" && d.id === id)
        
        this.setState(produce(draftState => {
            draftState.sections[sectionIdx].data[idx].src = dataURL
        }))
    }

    render() {
        console.log("re-rendering...")
        return (
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <Input
                        type="text"
                        label="Title"
                        placeholder="Enter Heading"
                    />
                </div>

                {this.state.sections.length == 0 && (
                    <div className={styles.addDelButtonsContainer}>
                        <div className={styles.button}>
                            <Button
                                size="small"
                                color={variables.color_blue}
                                onClick={this.handleSectionAdd}
                            >
                                Add New Section +
                            </Button>
                        </div>
                    </div>
                )}

                {this.state.sections.map((section) => {
                    return (
                        <section className={styles.section} key={section.id}>
                            <EditorSection
                                id={section.id}
                                addSection={this.handleSectionAdd}
                                deleteSection={this.handleSectionDelete}
                                data={section.data}
                                addImage={(e) => this.handleImageAdd(e, section.id)}
                                addParagraph={(e) => this.handleParagraphAdd(e, section.id)}
                                changeImage={(e, id) => this.handleImageChange(e, id, section.id)}
                                changeText={(e, type, id) => this.handleTextChange(e, section.id, type, id)}
                            />
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default Editor
