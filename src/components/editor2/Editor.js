import React, { Component } from "react"
import { v4 as uuid } from "uuid"
import Button from "../button/Button"

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

    getNewSection = () => ({ id: uuid() })

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

    render() {
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
                            />
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default Editor
