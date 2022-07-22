import React, { Component } from "react"

import styles from "./EditorSectionBar.module.scss"
import DropArrowIcon from "../../assets/img/icons/DropArrow.svg"
import AddIcon from "../../assets/img/icons/Add.svg"
import DeleteIcon from "../../assets/img/icons/Delete.svg"

export class EditorSectionBar extends Component {
    render() {
        return (
            <div className={styles.sectionBar}>
                <div
                    className={styles.nameContainer}
                    onClick={this.props.toggleSection}
                >
                    <img
                        src={DropArrowIcon}
                        className={
                            this.props.active ? "" : styles.dropDownRotated
                        }
                    />
                    <h1 className={styles.name}>Section Title</h1>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={styles.button}
                        onClick={() => this.props.addSection(this.props.id)}
                    >
                        <img src={AddIcon} />
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => this.props.deleteSection(this.props.id)}
                    >
                        <img src={DeleteIcon} />
                    </button>
                </div>
            </div>
        )
    }
}

export default EditorSectionBar
