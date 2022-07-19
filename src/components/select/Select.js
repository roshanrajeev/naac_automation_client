import React, { Component } from "react"

export class Select extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <select>{this.props.children}</select>
        )
    }
}

export class Option extends Component {
    render() {
        return <option value={this.props.value}>{this.props.name}</option>
    }
}

export default Select
