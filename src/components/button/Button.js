import React, { Component } from "react"
import { Link } from "react-router-dom"
import styles from "./Button.module.scss"

export class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: false,
        }
    }

    handleMouseEnter = () => this.setState({ hovered: true })
    handleMouseLeave = () => this.setState({ hovered: false })

    getContrastColor = (h) => {
        let r = 0,
            g = 0,
            b = 0

        if (h.length == 4) {
            r = "0x" + h[1] + h[1]
            g = "0x" + h[2] + h[2]
            b = "0x" + h[3] + h[3]
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2]
            g = "0x" + h[3] + h[4]
            b = "0x" + h[5] + h[6]
        }

        return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff"
    }

    render() {
        const {
            color = "#000",
            type = "filled",
            size = "medium",
            href = "",
            onSubmit = () => {},
            onClick = () => {},
            disabled = false
        } = this.props
        const { hovered } = this.state

        const style = {
            border: `2px solid ${color}`,
            backgroundColor:
                type == "filled" ? color : hovered ? color : "transparent",
            color:
                type == "filled"
                    ? this.getContrastColor(color)
                    : hovered
                    ? this.getContrastColor(color)
                    : color,
        }

        // const conditionalAttr = {}
        // if(href) conditionalAttr["to"] = href
        // if(onSubmit) conditionalAttr["onSubmit"] = onsubmit
        // if(onClick) conditionalAttr["onClick"] = onclick

        // console.log(conditionalAttr)
        return (
            <>
                {!href ? (
                    <button
                        className={`${styles.container} ${styles[size]} ${styles[type]}`}
                        style={style}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onSubmit={onSubmit}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {this.props.children}
                    </button>
                ) : (
                    <Link
                        className={`${styles.container} ${styles[size]} ${styles[type]}`}
                        to={href}
                        style={style}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                    >
                        {this.props.children}
                    </Link>
                )}
            </>
        )
    }
}

export default Button
