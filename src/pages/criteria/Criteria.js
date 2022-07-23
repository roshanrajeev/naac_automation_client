import React, { Component } from "react"
import { Link } from "react-router-dom"
import Header from "../../components/header/Header"
import styles from "./Criteria.module.scss"
import downloadicon from "../../assets/img/icons/downlad.svg"
import previewicon from "../../assets/img/icons/preview.svg"
import removeicon from "../../assets/img/icons/removefile.svg"
import editicon from "../../assets/img/icons/edit.svg"
export class Criteria extends Component {

    constructor(props){
        super(props)
        this.state={
            indicators:[{name:"indicator1", id:12, criteria_no:1},{name:"indicator2", id:23, criteria_no:1},
            {name:"indicator3", id:34, criteria_no:2},{name:"indicator4", id:45, criteria_no:2},
            {name:"indicator5", id:12, criteria_no:3},{name:"indicator6", id:23, criteria_no:3},
            {name:"indicator7", id:34, criteria_no:4},{name:"indicator8", id:45, criteria_no:4},
            {name:"indicator9", id:12, criteria_no:5},{name:"indicator10", id:23, criteria_no:5},
            {name:"indicator11", id:34, criteria_no:6},{name:"indicator12", id:45, criteria_no:6},
            {name:"indicator13", id:12, criteria_no:7},{name:"indicator14", id:23, criteria_no:7},
            {name:"indicator15", id:34, criteria_no:8},{name:"indicator16", id:45, criteria_no:8}],

            criterias:[{no:1, name:"Criterion 1 : Curricular Aspects"}, {no:2, name:"Criterion 2 : Teaching Learning and Evaluation"},
            {no:3, name:"Criterion 3 : Research, Innovations & Extension"}, {no:4, name:"Criterion 4 : Infrastructure and Learning Resources"},
            {no:5, name:"Criterion 5 : Student Support and Progression"}, {no:6, name:"Criterion 6 :  Governance, Leadership and Management"},
            {no:7, name:"Criterion 7 : Institutional Values and Best Practices"}, {no:8, name:"Criterion 8 : Teaching Learning and Evaluation"}]
        }    
    }

    render() {
        return (
            <div className={styles.container}>
                <Header/>
                <div className={styles.criterias}>
                <h1 className={styles.heading}>Criteria</h1>

                {this.state.criterias.map(criteria =>{
                    let i=0;
                    return(
                        <div className={styles.criterion}>
                        <div className={styles.criteria_top}>
                            <div className={styles.criteria_title}>
                            <h1 className={styles.title}>{criteria.name}</h1>
                            </div>
                            <div className={styles.add_key_indicator}>
                                <button className={styles.add_key_indicator_button}>Add Key Indicator +</button>
                            </div>
                        </div>
                        {this.state.indicators.filter(indicator => indicator.criteria_no===criteria.no).map(indicator => {
                                   i=i+1;
                                    return(
                                        <div className={styles.indicator}>
                                        <div className={styles.indicator_container}>
                                            <div className={styles.indicator_heading}>
                                                <h1>[{i}]</h1>
                                                <h1><Link className={styles.indicatorName} to="/indicator/{indicator.id}">{indicator.name}</Link></h1>
                                            </div>
                                            <ul className={styles.links}>
                                                <li className={styles.link}>
                                                    <Link to="/indicator/{indicator.id}/"> <img src={previewicon} alt="example" /></Link>
                                                </li>
                                                <li className={styles.link}>
                                                    <Link to="/indicator/{indicator.id}/download"> <img src={downloadicon} alt="example" /></Link>
                                                </li>
                                                <li className={styles.link}>
                                                    <Link to="/indicator/{indicator.id}/edit"> <img src={editicon} alt="example" /></Link>
                                                </li>
                                                <li className={styles.link}>
                                                    <Link to="/indicator/{indicator.id}/delete"> <img src={removeicon} alt="example" /></Link>
                                                </li>
                                            </ul>
                                    </div>
                                    </div>
                                )})};   
                    </div>    
                    )
                })};

                </div>
            </div>
        )
    }
}

export default Criteria
