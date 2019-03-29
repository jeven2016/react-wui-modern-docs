import React, {Component} from "react";

export default class Footer extends Component {
    static defaultProps = {
        className: "card-footer"
    };

    render() {
        const {className, children} = this.props;
        return <div className={className}>
            {children}
        </div>;
    }
}
