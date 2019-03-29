import React, {Component} from "react";

export default class Divider extends Component {
    static defaultProps = {
        className: "divider"
    };

    render() {
        const {type, className} = this.props;
        let nativeType = type ? type : "div";

        let elem = React.createElement(nativeType, {className: className}, null);
        return (
            elem
        );
    }

}