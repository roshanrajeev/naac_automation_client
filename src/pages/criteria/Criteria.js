import React, { Component } from "react"
import { Link } from "react-router-dom"
import styles from "./Criteria.module.scss"

export class Criteria extends Component {
    render() {
        return (
            <div>
                <div className={styles.criterion}>
                    <h1 className={styles.title}>Criterion 1</h1>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/1"
                        >
                            Indicator 1
                        </Link>
                    </div>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/2"
                        >
                            Indicator 2
                        </Link>
                    </div>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/3"
                        >
                            Indicator 3
                        </Link>
                    </div>
                </div>

                <div className={styles.criterion}>
                    <h1 className={styles.title}>Criterion 2</h1>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/4"
                        >
                            Indicator 1
                        </Link>
                    </div>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/5"
                        >
                            Indicator 2
                        </Link>
                    </div>
                    <div className={styles.indicator}>
                        <Link
                            className={styles.indicatorName}
                            to="/indicator/6"
                        >
                            Indicator 3
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Criteria
