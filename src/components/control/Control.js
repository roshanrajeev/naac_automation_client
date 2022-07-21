import React, { Component } from "react"
import Button from "../button/Button"
import styles from "./Control.module.scss"
import variables from "../../assets/styles/mixins.scss"
import { Select, Option } from "../select/Select"

export class Control extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.buttonsSection}>
                    <div className={styles.buttonsRow}>
                        <div className={styles.buttonContainer}>
                            <Button color={variables.color_yellow} size="large">
                                Save
                            </Button>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                color={variables.color_white}
                                type="outlined"
                                size="large"
                            >
                                Preview
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Button color={variables.color_white} size="large" onClick={this.props.downloadDoc}>
                            Download
                        </Button>
                    </div>
                </div>

                <div className={styles.controlSection}>
                    <h2 className={styles.heading_1}>Font Family</h2>
                    <Select>
                        <Option
                            name="Times New Roman"
                            value="times-new-roman"
                        />
                        <Option name="Arial" value="arial" />
                    </Select>
                </div>

                <div className={styles.controlSection}>
                    <h2 className={styles.heading_1}>Margin</h2>
                    <input type="text" />
                    <select>
                        <option>Regular</option>
                        <option>Medium</option>
                        <option>Bold</option>
                    </select>
                    <button>U</button>
                </div>
            </div>
        )
    }
}

export default Control
