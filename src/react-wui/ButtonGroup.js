import React, {Component} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class ButtonGroup extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button-group'
    };

    static propTypes = {
        block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
        className: PropTypes.string, //the class name of button
        size: PropTypes.string, //the size of the button
        outline: PropTypes.bool,
    };

    render() {
        const {
            size,
            outline,
            block,
            className,
            children,
            ...otherProps
        } = this.props;


        let clsName = classnames(className, {
            [size]: size,
            block: block,
            outline: outline
        });


        return (
            <div className={clsName} {...otherProps}>
                {children}
            </div>
        );
    }
}