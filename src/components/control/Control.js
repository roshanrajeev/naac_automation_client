import React, { Component } from "react"
import Button from "../button/Button"
import styles from "./Control.module.scss"
import variables from "../../assets/styles/mixins.scss"
import { Select, Option } from "../select/Select"

export class Control extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.buttonsSection}>
                    <div className={styles.buttonsRow}>
                        <div className={styles.buttonContainer}>
                            {
                                (!this.props.saved) ? 
                                <Button
                                    color={variables.color_yellow}
                                    size="large"
                                    onClick={this.props.saveDoc}
                                >
                                    Save
                                </Button>
                                : 
                                <Button
                                    color={variables.color_grey_medium}
                                    size="large"
                                    onClick={this.props.saveDoc}
                                    disabled={true}
                                >
                                    Save
                                </Button>
                            }
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button
                                color={variables.color_white}
                                type="outlined"
                                size="large"
                                href={`/preview/${this.props.id}`}
                            >
                                Preview
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Button
                            color={variables.color_white}
                            size="large"
                            onClick={this.props.downloadDoc}
                        >
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Control
