import React, { Component } from 'react'
import styles from "./SelectMenu.module.scss"
import { matchSorter } from 'match-sorter'
import tagData from '../../data/tags'

class SelectMenu extends Component {
  static defaultProps = {
    allowedTags: tagData
  }
  
  
  constructor(props) {
    super(props)
    let items = []
    Object.keys(this.props.allowedTags).map(tag => {
      items.push(this.props.allowedTags[tag]);
    })
    this.state = {
      command: "",
      items,
      selectedItem: 0
    }

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const command = this.state.command;
    if (prevState.command !== command) {
      const items = matchSorter(this.props.allowedTags, command, { keys: ["label"] });
      this.setState({ items: items });
    }
  }


  componentDidMount() {
    console.log("Select Menu Mounted")
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    console.log("Select Menu Unmounted")
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown(e) {
    const items = this.state.items
    const selected = this.state.selectedItem
    const command = this.state.command

    console.log(items)
    console.log(selected)

    let nextSelected, prevSelected

    switch(e.key) {
      case "Enter":
        e.preventDefault()
        console.log(items)
        this.props.onSelect(items[selected].tag)
        this.props.close()
        break;
      case "Backspace":
        if (!command) this.props.close();
        this.setState({ command: command.substring(0, command.length - 1) });
        break;
      case "ArrowUp":
        e.preventDefault();
        prevSelected = selected === 0 ? items.length - 1 : selected - 1;
        this.setState({ selectedItem: prevSelected });
        break;
      case "ArrowDown":
        e.preventDefault()
        nextSelected = selected === items.length - 1 ? 0 : selected + 1
        this.setState({selectedItem: nextSelected})
      case "Tab":
        e.preventDefault();
        nextSelected = selected === items.length - 1 ? 0 : selected + 1;
        this.setState({ selectedItem: nextSelected });
        break;
      default:
        this.setState({ command: this.state.command + e.key });
        break;
    }
  }

  render() {
    const x = this.props.position.x
    const y = this.props.position.y
    const positionAttributes = { top: y, left: x }

    return (
      <div className={styles.SelectMenu} style={positionAttributes}>
        {this.state.items.map((item, key) => {
          const selectedItem = this.state.selectedItem
          const isSelected = this.state.items.indexOf(item) === selectedItem
          return (
            <div key={key} 
              className={isSelected ? `${styles.item} ${styles.selected}`: styles.item } 
              onClick={() => this.props.onSelect(item.tag)}
              role="button"
            >
              {item.label}
            </div>
          )
        })}
      </div>
    )
  }
}

export default SelectMenu