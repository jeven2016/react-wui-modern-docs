import React, {Component} from "react";
import {getRandomValue} from "../Utils";

export default class MenuItem extends Component {
    static defaultProps = {
        className: "item"
    };

    render() {
        const {className, value, text, children, key, onChange} = this.props;
        let newKey = key ? key : "menuItem" + getRandomValue();
        return <div className={className} data-value={value}
                    key={newKey} onClick={() => {
            if (onChange) {
                onChange(value, text);
            }
        }}>
            {text}{children}
        </div>;
    }
}