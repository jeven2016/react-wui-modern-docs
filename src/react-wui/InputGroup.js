import React, {Component} from "react";
import classnames from "classnames";
import {appendClassIfAbsent} from "./Utils";


class InputLabel extends Component {
    static defaultProps = {
        className: "label"
    };

    render() {
        const {className, children} = this.props;
        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}

export default class InputGroup extends Component {
    static defaultProps = {
        disabled: false,
        className: "input-group",
    };

    static Label = InputLabel;

    getNewElement(element, className) {
        let newClassName = appendClassIfAbsent(element, className);
        return React.cloneElement(element, {className: newClassName});
    }

    render() {
        const {block, children, className, ...otherProps} = this.props;

        let clsName = classnames(className, {
            block: block
        });

        return (
            <div className={clsName} {...otherProps}>
                {children}
            </div>
        )
    }
}