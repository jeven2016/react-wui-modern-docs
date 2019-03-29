import React, {Component} from "react";
import classnames from "classnames";
import {generateClassName} from "../Utils";

export default class Menu extends Component {
    static defaultProps = {
        className: "menu"
    };

    render() {
        const {className, children, active, onChange, position} = this.props;
        console.log("menu=" + position)
        let newClassName = classnames(className, {active: active, [position]: position});
        return (
            <div className={newClassName}>
                {
                    React.Children.map(children, elem => {
                        return React.cloneElement(elem, {onChange: onChange});
                    })
                }
            </div>
        )
    }
}
