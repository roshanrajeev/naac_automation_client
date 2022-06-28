import React, { Component } from 'react'
import Header from '../../components/header/Header'
import styles from './Home.module.scss'
import fileIcon from '../../assets/img/file.png'
import editIcon from '../../assets/img/edit.png'
import deleteIcon from '../../assets/img/delete.png'

export class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.headerWrapper}>
            <Header/>
        </div>
        <div className='container'>
            <h1 className={styles.heading}>Documents</h1>
            <div className={styles.creiterionWrapper}>
                <div className={styles.criterion}>
                    <h2 className={styles.title}>Criterion I: Curricular Aspects</h2>
                    <button className={styles.button}>New +</button>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.dateContainer}>
                        <img className={styles.icon} src={fileIcon}/>
                        <p className={styles.date}>04-Oct-2022</p>
                    </div>
                    <p className={styles.title}>1.1.1.2.Summary Report 2019</p>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={editIcon}/>
                        <img className={styles.icon} src={deleteIcon}/>
                    </div>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.dateContainer}>
                        <img className={styles.icon} src={fileIcon}/>
                        <p className={styles.date}>04-Oct-2022</p>
                    </div>
                    <p className={styles.title}>1.1.1.2.Summary Report 2019</p>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={editIcon}/>
                        <img className={styles.icon} src={deleteIcon}/>
                    </div>
                </div>
            </div>

            <div className={styles.creiterionWrapper}>
                <div className={styles.criterion}>
                    <h2 className={styles.title}>Criterion II: Teaching Learning and Evaluation</h2>
                    <button className={styles.button}>New +</button>
                </div>
                <div className={styles.indicator}>
                    <div className={styles.dateContainer}>
                        <img className={styles.icon} src={fileIcon}/>
                        <p className={styles.date}>04-Oct-2022</p>
                    </div>
                    <p className={styles.title}>1.1.1.2.Summary Report 2019</p>
                    <div className={styles.icons}>
                        <img className={styles.icon} src={editIcon}/>
                        <img className={styles.icon} src={deleteIcon}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home