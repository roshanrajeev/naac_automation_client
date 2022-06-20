import React, { Component, createRef } from 'react'
import ContentEditable from 'react-contenteditable'
import styles from "./EditableBlock.module.scss"

class EditableBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            html: "",
            tag: "p",
            previousKey: ""
        }
        this.contentEditable = createRef()
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.getPlaceholder = this.getPlaceholder.bind(this)
    }

    // helpers
    getPlaceholder() {
        if(this.props.placeholder)
            return this.props.placeholder
            
        if(this.state.tag === "p") {
            return "Type something"
        }
        if(this.state.tag === "h1") {
            return "Heading 1"
        }
        if(this.state.tag === "h2") {
            return "Heading 2"
        }
        if(this.state.tag === "h3") {
            return "Heading 3"
        }
        if(this.state.tag === "h4") {
            return "Heading 4"
        }
    }

    componentDidMount() {
        this.setState({ html: this.props.html, tag: this.props.tag })
    }

    componentDidUpdate(prevProps, prevState) {
        const htmlChanged = prevState.html !== this.state.html
        const tagChanged = prevState.tag !== this.state.tag

        if(htmlChanged || tagChanged) {
            this.props.updatePage({
                id: this.props.id,
                html: this.state.html,
                tag: this.state.tag
            })
        }
    }

    handleChange(e) {
        this.setState({ html: e.target.value })
    }

    handleKeyDown(e) {
        if(e.key === "Enter") {
            if(this.state.previousKey !== "Shift") {
                e.preventDefault()
                this.props.addBlock({
                    id: this.props.id,
                    ref: this.contentEditable.current
                })
            }
        }
        if(e.key === "Backspace" && !this.state.html) {
            e.preventDefault()
            this.props.deleteBlock({
                id: this.props.id,
                ref: this.contentEditable.current
            })
        }
        this.setState({ previousKey: e.key })
    }

    render() {
        return (
            <ContentEditable 
                data-placeholder={this.getPlaceholder()}
                className={styles.block}
                html={this.state.html}
                tagName={this.state.tag}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                innerRef={this.contentEditable}
            />
        )
    }
}

export default EditableBlock