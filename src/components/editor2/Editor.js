import React, { Component } from "react"

import Button from "../button/Button"
import EditorSection from "../editorSection/EditorSection"
import Input from "../input/Input"

import variables from "../../assets/styles/mixins.scss"
import styles from "./Editor.module.scss"

export class Editor extends Component {
    constructor(props) {
        super(props)
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
                        onChange={this.props.changeTitle}
                        value={this.props.title}
                    />
                </div>

                {this.props.sections.length == 0 && (
                    <div className={styles.addDelButtonsContainer}>
                        <div className={styles.button}>
                            <Button
                                size="small"
                                color={variables.color_blue}
                                onClick={this.props.addSection}
                            >
                                Add New Section +
                            </Button>
                        </div>
                    </div>
                )}

                {this.props.sections.map((section) => {
                    return (
                        <section className={styles.section} key={section.id}>
                            <EditorSection
                                id={section.id}
                                addSection={this.props.addSection}
                                deleteSection={this.props.deleteSection}
                                data={section.data}
                                addImage={(e) =>
                                    this.props.addImage(e, section.id)
                                }
                                addParagraph={(e) =>
                                    this.props.addParagraph(e, section.id)
                                }
                                changeImage={(e, id) =>
                                    this.props.changeImage(e, id, section.id)
                                }
                                changeText={(e, type, id) =>
                                    this.props.changeText(
                                        e,
                                        section.id,
                                        type,
                                        id
                                    )
                                }
                            />
                        </section>
                    )
                })}
            </div>
        )
    }
}

export default Editor
