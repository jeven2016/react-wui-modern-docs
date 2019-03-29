import React, {Component} from "react";

export default class Header extends Component {
    static defaultProps = {
        className: "card-header"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}