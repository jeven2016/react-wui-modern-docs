import React, {Component} from "react";
import {updateChildrenByCallback} from "./Utils";
import classnames from "classnames";
import PropTypes from "prop-types";

export default class ButtonGroup extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button-group'
    };

    static propTypes = {
        type: PropTypes.string,   //it can only be blank or 'button' and it has nothing to do with native html type
        block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
        color: PropTypes.string, //the color
        className: PropTypes.string, //the class name of button
        disabled: PropTypes.bool, //disable this button
        size: PropTypes.string, //the size of the button
        outline: PropTypes.bool,
    };

    generateClassName() {
        const {
            type,
            color,
            disabled,
            size,
            outline,
            block,
            className
        } = this.props;


        let clsName = classnames(className, {
            [type]: type,
            [size]: size,
            [color]: color,
            block: block,
            disabled,
            outline: outline
        });

        return clsName;
    }

    updateChildren() {
        const {
            children,
            disabled
        } = this.props;

        return updateChildrenByCallback(children, (elem) => {
            return React.cloneElement(elem, {disabled: disabled});
        });
    }

    render() {
        let newClassName = this.generateClassName();

        return (
            <div className={newClassName}>
                {this.updateChildren()}
            </div>
        );
    }
}