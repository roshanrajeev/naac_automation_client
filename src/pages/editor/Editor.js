import React, { Component } from 'react'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import uid from '../../utils/uid'
import EditableBlock from '../../components/editableBlock/EditableBlock'
import setCaretToEnd from "../../utils/setCaretToEnd"
import tagData from '../../data/tags'

import styles from "./Editor.module.scss"

const initialBlock = {id: uid(), html: "", tag: "h1"}

class Editor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blocks: [initialBlock],
            tagStyles: tagData
        }

        this.handleBlockAdd = this.handleBlockAdd.bind(this)
        this.handleBlockDelete = this.handleBlockDelete.bind(this)
        this.handlePageUpdate = this.handlePageUpdate.bind(this)
        this.handleOptionChange = this.handleOptionChange.bind(this)
    
        this.fontFamily = [
            { value: 'Poppins', label: 'Poppins' },
            { value: 'Lato', label: 'Lato' }
        ]
    
        this.fontSize = [
            { value: '8pt', label: '8' },
            { value: '9pt', label: '9' },
            { value: '16pt', label: '16' },
            { value: '20pt', label: '20' }
        ]
    
        this.fontWeight = [
            { value: '400', label: 'Regular' },
            { value: '500', label: 'Bold' },
            { value: '700', label: 'Dark' }
        ]
    
        this.textAlign = [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' }
        ]
    }

    /*=================================
    HELPER FUNCTIONS
    =================================*/

    getStyle(style, list) {
        return list.find(item => item.value == style)
    }

    /*=================================
    HANDLER FUNCTIONS
    =================================*/

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
            const blocks = this.state.blocks
            const idx = blocks.map(b => b.id).indexOf(currentBlock.id)
            const updatedBlocks = [...blocks]
            updatedBlocks.splice(idx, 1)
            this.setState({blocks: updatedBlocks}, () => {
                previousBlock.focus()
                setCaretToEnd(previousBlock)
            })
        }
    }

    handleOptionChange(newVal, property) {
        console.log("changed")
        this.setState(prev => {
            const tagStyles = this.state.tagStyles
            return {
                ...prev,
                tagStyles
            }
        })
    }

    /*=================================
    RENDER FUNCTION
    =================================*/

    render() {
        return (
            <div className={styles.editor}>
                <div className="container">
                    <div className={styles.editorInnerWrapper}>
                        <div className={styles.blocksContainer}>
                            {this.state.blocks.map((block) => {
                                return (
                                    <EditableBlock 
                                        key={block.id}
                                        id={block.id}
                                        tag={block.tag}
                                        html={block.html}
                                        styles={tagData[block.tag].styles}
                                        updatePage={this.handlePageUpdate}
                                        addBlock={this.handleBlockAdd}
                                        deleteBlock={this.handleBlockDelete}
                                    />
                                )
                            })}
                        </div>

                        <div className={styles.controls}>
                            <div className={styles.controlWrapper}>
                                <h1 className={styles.title}>Heading 1</h1>
                                <div className={styles.typeContainer}>
                                    <h2 className={styles.type}>Font Family</h2>
                                    <Select
                                        isSearchable={true}
                                        className={styles.select}
                                        options={this.fontFamily}
                                        defaultValue={this.getStyle(tagData["h1"].styles.fontFamily, this.fontFamily)}
                                        onChange={(e) => this.handleOptionChange(e, "fontFamily")}
                                    />
                                </div>
                                <div className={styles.typeContainerRow}>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Font Size</h2>
                                        <CreatableSelect
                                            className={styles.select}
                                            options={this.fontSize}
                                            defaultValue={this.getStyle(tagData["h1"].styles.fontSize, this.fontSize)}
                                            onChange={this.handleOptionChange}
                                        />
                                    </div>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Font Weight</h2>
                                        <CreatableSelect 
                                            className={styles.select}
                                            options={this.fontWeight}
                                            defaultValue={this.getStyle(tagData["h1"].styles.fontWeight, this.fontWeight)}
                                            onChange={this.handleOptionChange}
                                        />
                                    </div>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Text Align</h2>
                                        <CreatableSelect 
                                            className={styles.select} 
                                            options={this.textAlign}
                                            defaultValue={this.getStyle(tagData["h1"].styles.textAlign, this.textAlign)}
                                            onChange={this.handleOptionChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.controlWrapper}>
                                <h1 className={styles.title}>Paragraph</h1>
                                <div className={styles.typeContainer}>
                                    <h2 className={styles.type}>Font Family</h2>
                                    <Select 
                                        isSearchable={true} 
                                        className={styles.select} 
                                        options={this.fontFamilies} 
                                        defaultValue={this.fontFamily[0]}
                                    />
                                </div>
                                <div className={styles.typeContainerRow}>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Font Size</h2>
                                        <CreatableSelect 
                                            className={styles.select} 
                                            options={this.fontSize}
                                            defaultValue={this.fontSize[0]}
                                        />
                                    </div>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Font Weight</h2>
                                        <CreatableSelect 
                                            className={styles.select} 
                                            options={this.fontWeight}
                                            defaultValue={this.fontWeight[0]}
                                        />
                                    </div>
                                    <div className={styles.typeContainer}>
                                        <h2 className={styles.type}>Text Align</h2>
                                        <CreatableSelect 
                                            className={styles.select} 
                                            options={this.textAlign}
                                            defaultValue={this.textAlign[0]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button>Download Doc</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Editor