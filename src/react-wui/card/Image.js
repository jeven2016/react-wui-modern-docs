import React, {Component} from "react";

export default class Image extends Component {
    static defaultProps = {
        className: "image"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}