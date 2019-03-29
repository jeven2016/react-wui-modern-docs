import React, {Component} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class IconInput extends Component {
    static defaultProps = {
        disabled: false,
        className: "icon-input",
        withinGroup: false
    };

    static propTypes = {
        leftIcon: PropTypes.bool,
        size: PropTypes.string,
        block: PropTypes.bool,
        withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
    };

    render() {
        const {children, leftIcon, className, size, block, withinGroup} = this.props;

        let clsName = classnames(className, {
            "left-icon": leftIcon,
            [size]: size,
            block: block,
            element: withinGroup //add 'element' to class if this input is under controlled by input-group
        });

        return <div className={clsName}>
            {children}
        </div>;
    }
}


class Input extends Component {
    static defaultProps = {
        nativeType: "text",
        className: "input",
        expanded: false,
        withinGroup: false,
        placeholder: ""
    };

    static propTypes = {
        size: PropTypes.string,
        nativeType: PropTypes.string,
        block: PropTypes.bool,
        className: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
        expanded: PropTypes.bool // whether the input is expanded in input-group, it only take effect with input-group
    };

    static IconInput = IconInput;

    render() {
        const {
            size,
            nativeType,
            block,
            className,
            placeholder,
            expanded,
            withinGroup,
            ...otherProps
        } = this.props;

        let clsName = classnames(className, {
            [size]: size,
            expanded: expanded,
            element: withinGroup,
            block: block
        });

        return (
            <input className={clsName} type={nativeType} placeholder={placeholder} {...otherProps}/>
        );

    }
}

export default Input;