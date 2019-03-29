import React, {Component} from "react";

export default class Body extends Component {
    static defaultProps = {
        className: "card-body"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}