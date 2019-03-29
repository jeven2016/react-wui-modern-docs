import React, {Component} from "react";

export default class Icon extends Component {
    render() {
        const {className, color} = this.props;
        return (<i className={className}/>);
    }
}