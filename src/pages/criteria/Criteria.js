import React, { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/header/Header"
import styles from "./Criteria.module.scss"
import downloadicon from "../../assets/img/icons/downlad.svg"
import previewicon from "../../assets/img/icons/preview.svg"
import removeicon from "../../assets/img/icons/removefile.svg"
import editicon from "../../assets/img/icons/edit.svg"
import Button from "../../components/button/Button"
import { v4 as uuid } from "uuid"
import { fetchCriteria, fetchIndicators } from "../../requests/requests"
import { AuthContext } from "../../auth/authContext"
import withNavigate from "../../utils/withNavigate"
export class Criteria extends Component {
    static contextType = AuthContext

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            indicators: [],
            criterias: [],
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.addIndicator = this.addIndicator.bind(this)
    }

    componentDidMount() {
        const asyncFunc = async () => {
            const {user, setUser} = this.context
            const res = await fetchCriteria(user.token)
            if(!res.ok) {
                console.log("Couldn't fetch criteria")
                return
            }
            const criteria = await res.json()
            // console.log({criteria})

            this.setState({criterias: criteria})

            let allIndicators = []
            criteria.forEach(async (c) => {
                const res = await fetchIndicators(user.token, c.id)
                if(res.ok) {
                    const indicators = await res.json()

                    indicators.forEach(indicator => {
                        const ind = {...indicator,criteria_id: c.id}
                        allIndicators.push(ind)
                    })
                    // console.log(indicators)
                }
            })
            setTimeout(() => {
                const newarr = [...{allIndicators}.allIndicators]
                console.log(newarr, newarr.length)
                this.setState({indicators: newarr})
            }, 1000)
        }
        asyncFunc()
    }

    handleDelete(id) {
        console.log("delete")
        if (!window.confirm("Are you sure you want to delete?")) return

        this.setState((prev) => {
            const newIndicators = prev.indicators.filter(
                (indicator) => indicator.id !== id
            )
            return {
                ...prev,
                indicators: newIndicators,
            }
        })
    }

    addIndicator(cno) {
        console.log("added key indicator")
        const name = prompt("Enter name of indicator")
        if(!name) return
        let indicator = { name, id: uuid(), criteria_id: cno }
        // this.setState({indicators: this.state.indicators.concat([indicator])})
        this.setState((prev) => {
            const newIndicators = [...prev.indicators, indicator]
            return {
                ...prev,
                indicators: newIndicators,
            }
        })
    }

    render() {
        return (
            <div className={styles.container}>
                <Header />
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className={styles.criterias}>
                        <div className="container">
                        <h1 className={styles.heading}>Criteria</h1>
                        {this.state.criterias.map((criteria) => {
                            return (
                                <div className={styles.criterion}>
                                    <div className={styles.criteria_top}>
                                        <div className={styles.criteria_title}>
                                            <h1 className={styles.title}>
                                                {criteria.name}
                                            </h1>
                                        </div>
                                        <div
                                            className={styles.add_key_indicator}
                                        >
                                            <Button
                                                color="blue"
                                                size="small"
                                                onClick={(e) =>
                                                    this.addIndicator(
                                                        criteria.id
                                                    )
                                                }
                                            >
                                                Add Key Indicator +
                                            </Button>
                                        </div>
                                    </div>
                                    {this.state.indicators.filter((indicator) => {console.log(indicator); return indicator.criteria_id == criteria.id})
                                        .map((indicator) => {
                                            console.log(JSON.stringify(indicator))
                                            return (
                                                <div
                                                    className={styles.indicator}
                                                >
                                                    <div
                                                        className={
                                                            styles.indicator_container
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.indicator_heading
                                                            }
                                                        >
                                                            <h1>
                                                                <Link
                                                                    className={
                                                                        styles.indicatorName
                                                                    }
                                                                    to="/indicator/{indicator.id}"
                                                                >
                                                                    {
                                                                        indicator.name
                                                                    }
                                                                </Link>
                                                            </h1>
                                                        </div>
                                                        <ul
                                                            className={
                                                                styles.links
                                                            }
                                                        >
                                                            <li
                                                                className={
                                                                    styles.link
                                                                }
                                                            >
                                                                <Link
                                                                    to={`/preview/${indicator.id}/`}
                                                                >
                                                                    {" "}
                                                                    <img
                                                                        src={
                                                                            previewicon
                                                                        }
                                                                        alt="example"
                                                                    />
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    styles.link
                                                                }
                                                            >
                                                                <Link
                                                                    to={`/indicator/${indicator.id}/download`}
                                                                >
                                                                    {" "}
                                                                    <img
                                                                        src={
                                                                            downloadicon
                                                                        }
                                                                        alt="example"
                                                                    />
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    styles.link
                                                                }
                                                            >
                                                                <Link
                                                                    to={`/indicator/${indicator.id}/`}
                                                                >
                                                                    {" "}
                                                                    <img
                                                                        src={
                                                                            editicon
                                                                        }
                                                                        alt="example"
                                                                    />
                                                                </Link>
                                                            </li>
                                                            <li
                                                                className={
                                                                    styles.link
                                                                }
                                                            >
                                                                {/* <Link to={`/indicator/${indicator.id}/delete`}> <img src={removeicon} alt="example" /></Link> */}
                                                                <button
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        this.handleDelete(
                                                                            indicator.id
                                                                        )
                                                                    }
                                                                    className={
                                                                        styles.icon
                                                                    }
                                                                >
                                                                    <img
                                                                        src={
                                                                            removeicon
                                                                        }
                                                                        alt="example"
                                                                    />
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                            )
                        })}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default withNavigate(Criteria)
