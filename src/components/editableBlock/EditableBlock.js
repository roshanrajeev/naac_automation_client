import React, { Component, createRef } from 'react'
import ContentEditable from 'react-contenteditable'

import SelectMenu from '../selectMenu/SelectMenu'
import styles from "./EditableBlock.module.scss"
import setCaretToEnd from "../../utils/setCaretToEnd"

class EditableBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            htmlBackup: null,
            html: "",
            tag: "p",
            previousKey: "",
            selectMenuIsOpen: false,
            selectMenuPosition: { x: null, y: null }
        }
        this.contentEditable = createRef()

        // helpers
        this.getPlaceholder = this.getPlaceholder.bind(this)
        this.getCaretCoordinates = this.getCaretCoordinates.bind(this)
        
        // handlers
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleKeyUp  = this.handleKeyUp.bind(this)
        this.handleOpenSelectMenu = this.handleOpenSelectMenu.bind(this)
        this.handleCloseSelectMenu = this.handleCloseSelectMenu.bind(this)
        this.handleTagSelection = this.handleTagSelection.bind(this)
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

    /*=================================
    HELPER FUNCTIONS
    =================================*/

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

    getCaretCoordinates() {
        let x, y
        const selection = window.getSelection()
        if(selection.rangeCount !== 0) {
            const range = selection.getRangeAt(0).cloneRange()
            range.collapse(false)
            const rect = range.getClientRects()[0]
            if(rect) {
                x = rect.left
                y = rect.top
            }
        }
        return {x, y}
    }

    /*=================================
    HANDLER FUNCTIONS
    =================================*/

    handleChange(e) {
        this.setState({ html: e.target.value })
    }

    handleKeyDown(e) {
        if(e.key === "/") {
            this.setState({ htmlBackup: this.state.html })
        }

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

    handleKeyUp(e) {
        if(e.key === "/") {
            this.handleOpenSelectMenu()
        }
    }

    handleOpenSelectMenu() {
        const { x, y } = this.getCaretCoordinates()
        this.setState({
            selectMenuIsOpen: true,
            selectMenuPosition: { x, y }
        })
        document.addEventListener('click', this.handleCloseSelectMenu)
    }

    handleCloseSelectMenu() {
        this.setState({
            htmlBackup: null,
            selectMenuIsOpen: false,
            selectMenuPosition: { x: null, y: null }
        })
    }

    handleTagSelection(tag) {
        console.log(tag)
        this.setState({tag: tag, html: this.state.htmlBackup}, () => {
            setCaretToEnd(this.contentEditable.current)
            this.handleCloseSelectMenu()
        })
    }

    /*=================================
    RENDER FUNCTION
    =================================*/

    render() {
        return (
            <>
                {this.state.selectMenuIsOpen && 
                    <SelectMenu 
                        position={this.state.selectMenuPosition}
                        onSelect={this.handleTagSelection}
                        close={this.handleCloseSelectMenu}
                    />
                }
                <ContentEditable 
                    data-placeholder={this.getPlaceholder()}
                    className={styles.block}
                    html={this.state.html}
                    tagName={this.state.tag}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    onKeyUp={this.handleKeyUp}
                    innerRef={this.contentEditable}
                />
            </>
        )
    }
}

export default EditableBlock