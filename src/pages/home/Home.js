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
        <Header/>
        <h1>Documents</h1>
        <div>
            <h2>Criterion I: Curricular Aspects</h2>
            <button>New +</button>
        </div>
        <div>
            <img src={fileIcon}/>
            <p>04-Oct-2022</p>
            <p>1.1.1.2.Summary Report 2019</p>
            <img src={editIcon}/>
            <img src={deleteIcon}/>
        </div>
        <div>
            <h2>Criterion I: Curricular Aspects</h2>
            <button>New +</button>
        </div>
      </div>
    )
  }
}

export default Home