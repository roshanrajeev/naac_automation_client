import React, { Component } from "react"
import { v4 as uuid } from "uuid"
import imageCompression from "browser-image-compression"
import produce from "immer"
import { saveAs } from "file-saver"

import Control from "../../components/control/Control"
import Header from "../../components/header/Header"
import Editor from "../../components/editor2/Editor"

import styles from "./KeyIndicator.module.scss"
import toDocx from "../../utils/toDocx"
import withRouter from "../../utils/withRouter"

class KeyIndicator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            sections: [],
        }

        this.handleDocDownload = this.handleDocDownload.bind(this)
        this.handleDocSave = this.handleDocSave.bind(this)
        this.handleSectionAdd = this.handleSectionAdd.bind(this)
        this.handleSectionDelete = this.handleSectionDelete.bind(this)
        this.handleImageAdd = this.handleImageAdd.bind(this)
        this.handleParagraphAdd = this.handleParagraphAdd.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.params
        const json = window.localStorage.getItem(id)
        if (!json) return
        const data = JSON.parse(json)
        console.log(data)
        const title = data["title"] || ""
        const sections = data["sections"] || []
        console.log({ title, sections })
        this.setState({ title, sections })
    }

    getImageDimensions(data) {
        return new Promise (function (resolved, rejected) {
            var i = new Image()
            i.onload = function(){
                resolved({w: i.width, h: i.height})
            };
            i.src = data
        })
    }

    getNewSection = () => ({
        id: uuid(),
        data: [
            { id: uuid(), type: "heading", value: "" },
            { id: uuid(), type: "sub-heading", value: "" },
        ],
    })

    async handleDocDownload() {
        // console.log(JSON.stringify(this.state.sections))
        const blob = await toDocx(this.state.title, this.state.sections)
        saveAs(blob, "file.docx")
    }

    handleDocSave() {
        console.log("saving...")
        window.localStorage.setItem(
            this.props.params.id,
            JSON.stringify({
                title: this.state.title,
                sections: this.state.sections,
            })
        )
    }

    handleDocPreview() {}

    handleSectionAdd(id) {
        console.log("section adding..")
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
        if (!window.confirm("Are you sure you want to delete?")) return

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
        const sectionIdx = this.state.sections.findIndex(
            (section) => section.id == sectionId
        )
        const item = { id: uuid(), type: "image", src: "", width: 0, height: 0 }

        this.setState(
            produce((draftState) => {
                draftState.sections[sectionIdx].data.push(item)
            })
        )
    }

    handleParagraphAdd(e, sectionId) {
        const sectionIdx = this.state.sections.findIndex(
            (section) => section.id == sectionId
        )
        const item = { id: uuid(), type: "paragraph", value: "" }

        this.setState(
            produce((draftState) => {
                draftState.sections[sectionIdx].data.push(item)
            })
        )
    }

    handleTextChange(e, sectionId, type, id = null) {
        const sectionIdx = this.state.sections.findIndex(
            (section) => section.id == sectionId
        )
        const section = this.state.sections[sectionIdx]
        console.log(id, type, sectionId)

        const idx = id
            ? section.data.findIndex((d) => d.type === type && d.id === id)
            : section.data.findIndex((d) => d.type === type)

        console.log({ idx })
        console.log(section.data.findIndex((d) => d.type === type))

        this.setState(
            produce((draftState) => {
                draftState.sections[sectionIdx].data[idx].value = e.target.value
            })
        )
    }

    async handleImageChange(e, id, sectionId) {
        const file = e.target.files[0]
        if (!file) return
        console.log("Size: " + file.size / 1024 / 1024 + "MB")
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        }
        const compressedFile = await imageCompression(file, options)
        console.log(
            "Compressed Size: " + compressedFile.size / 1024 / 1024 + "MB"
        )
        const dataURL = await imageCompression.getDataUrlFromFile(
            compressedFile
        )

        const sectionIdx = this.state.sections.findIndex(
            (section) => section.id == sectionId
        )
        const section = this.state.sections[sectionIdx]

        const idx = section.data.findIndex(
            (d) => d.type === "image" && d.id === id
        )
        
        const {w, h} = await this.getImageDimensions(dataURL)

        this.setState(
            produce((draftState) => {
                draftState.sections[sectionIdx].data[idx].src = dataURL
                draftState.sections[sectionIdx].data[idx].width = w
                draftState.sections[sectionIdx].data[idx].height = h
            })
        )
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value })
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
                                <Editor
                                    title={this.state.title}
                                    sections={this.state.sections}
                                    changeTitle={this.handleTitleChange}
                                    changeImage={this.handleImageChange}
                                    changeText={this.handleTextChange}
                                    addParagraph={this.handleParagraphAdd}
                                    addImage={this.handleImageAdd}
                                    addSection={this.handleSectionAdd}
                                    deleteSection={this.handleSectionDelete}
                                />
                            </div>
                            <div className={styles.controlContainer}>
                                <Control
                                    downloadDoc={this.handleDocDownload}
                                    saveDoc={this.handleDocSave}
                                    id={this.props.params.id}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(KeyIndicator)
