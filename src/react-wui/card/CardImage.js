import React, {Component} from "react";

export default class CardImage extends Component {
    static defaultProps = {
        className: "card-image"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}