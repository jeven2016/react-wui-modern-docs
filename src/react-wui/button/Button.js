import React, {Component} from "react";
import PropTypes from 'prop-types';
import classnames from "classnames";
import {preventEvent} from '../event/EventFuntions';

/**
 * Button component
 */
export default class Button extends Component {
    static defaultProps = {
        disabled: false,
        className: 'button',
        withinGroup: false
    };

    static propTypes = {
        type: PropTypes.string,   //it can only be blank or 'button' and it has nothing to do with native html type
        nativeType: PropTypes.string, //the native html type, like 'button', 'reset' or 'submit'
        block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
        color: PropTypes.string, //the color
        className: PropTypes.string, //the class name of button
        disabled: PropTypes.bool, //disable this button
        active: PropTypes.bool, // active this button
        onClick: PropTypes.func, //the click callback provided
        size: PropTypes.string, //the size of the button
        outline: PropTypes.bool,
        circle: PropTypes.bool,
        withinGroup: PropTypes.bool, //whether this input is under controlled by a input-group
    };

    constructor(props) {
        super(props);
    }

    getCallback(disabled = false, onClick) {
        //ensure the click event won't be triggered if the button is disabled
        let clickCallback = onClick;
        if (disabled) {
            clickCallback = (e) => {
                preventEvent(e);
            }
        }
        if (!clickCallback) {
            clickCallback = (e) => {
            };
        }
        return clickCallback;
    }


    render() {
        const {
            children,
            nativeType,
            style,
            type,
            block,
            color,
            className,
            active = false,
            size,
            outline,
            circle,
            onClick,
            disabled = false,
            withinGroup,
            ...otherProps
        } = this.props;

        let clsName = classnames(className, {
            [type]: type,
            [size]: size,
            [color]: color,
            block: block,
            disabled: disabled,
            active: active,
            outline: outline,
            circle: circle,
            label: withinGroup
        });

        return (
            <button className={clsName} onClick={this.getCallback(disabled, onClick)}
                    type={nativeType ? nativeType : "button"} style={style} {...otherProps}>
                {children}
            </button>
        );
    }
}
