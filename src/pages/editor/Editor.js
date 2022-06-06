import React, { Component } from 'react'
import uid from '../../utils/uid'
import EditableBlock from '../editableBlock/EditableBlock'

import styles from "./Editor.module.scss"

const initialBlock = {id: uid(), html: "", tag: "h1"}

class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blocks: [initialBlock]
        }
        this.handleBlockAdd = this.handleBlockAdd.bind(this)
        this.handleBlockDelete = this.handleBlockDelete.bind(this)
        this.handlePageUpdate = this.handlePageUpdate.bind(this)
    }

    handlePageUpdate(updatedBlock) {
        const blocks = this.state.blocks
        const idx = blocks.map(block => block.id).indexOf(updatedBlock.id)
        const updatedBlocks = [...blocks]
        updatedBlocks[idx] = {
            ...updatedBlocks[idx],
            tag: updatedBlock.tag,
            html: updatedBlock.html
        }
        this.setState({ blocks: updatedBlocks })
    }

    handleBlockAdd(currentBlock) {
        const newBlock = {id: uid(), html: "", tag: "p"}
        const blocks = this.state.blocks
        const idx = blocks.map(block => block.id).indexOf(currentBlock.id)
        const updatedBlocks = [...blocks]
        updatedBlocks.splice(idx + 1, 0, newBlock)
        this.setState({ blocks: updatedBlocks }, () => {
            console.log(this.state.blocks)
            currentBlock.ref.nextElementSibling.focus()
        })
    }

    handleBlockDelete(currentBlock) {
        const previousBlock = currentBlock.ref.previousElementSibling
        if(previousBlock) {

        }
    }

    render() {
        return (
            <div className={styles.editor}>
                {this.state.blocks.map((block) => {
                    return (
                        <EditableBlock 
                            key={block.id}
                            id={block.id}
                            tag={block.tag}
                            html={block.html}
                            updatePage={this.handlePageUpdate}
                            addBlock={this.handleBlockAdd}
                            deleteBlock={this.handleBlockDelete}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Editor