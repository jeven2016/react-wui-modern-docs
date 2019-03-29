import React, {Component} from "react";

export default class Card extends Component {
    static defaultProps = {
        className: "card"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}