import React, { Component } from 'react'
import Header from '../../components/header/Header'
import toDocx from '../../utils/toDocx'
import styles from "./Preview.module.scss"

export class Preview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ""
        }
    }
    componentDidMount() {
        // const data = window.localStorage.getItem()
        // toDocx()
        console.log(this.props.match)
    }
  render() {
    return (
      <div>
        <Header/>
        
      </div>
    )
  }
}

export default Preview