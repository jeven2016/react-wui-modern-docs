import React, {Component} from "react";

export default class Row extends Component {
    static defaultProps = {
        className: "card-row"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}