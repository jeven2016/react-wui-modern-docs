import React, {Component} from "react";

export default class OverlayTitle extends Component {
    static defaultProps = {
        className: "overlay-title"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}