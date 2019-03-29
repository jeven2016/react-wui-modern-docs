import React, {Component} from "react";
import classnames from "classnames";
import {removeClass, toggleClass} from "../Utils";
import {preventEvent, WindowEventHandler} from "../event";
import {Menu} from "../menu";

export default class Dropdown extends Component {
    static defaultProps = {
        className: "dropdown",
        buttonDpClassName: "button-dropdown",
        textDpClassName: "simple dropdown",

        triggerBy: "click", /*trigger showing the menu by click or hover event*/

        hover_id: "hover"
    };


    constructor(args) {
        super(args);
        this.state = {
            currentDpClassName: null
        }
    }

    isTriggeredByMouseHover() {
        const {triggerBy, hover_id} = this.props;
        if (triggerBy !== hover_id) {
            return false;
        }
        return true;
    }

    handleClick(evt) {
        if (this.isTriggeredByMouseHover()) {
            return;
        }
        this.toggleMenuStatus();
        preventEvent(evt);
    }

    toggleMenuStatus() {
        const {children, className} = this.props;
        let dpCls = toggleClass(this.getDpClassName(), "active");
        this.setState({currentDpClassName: dpCls});
    }

    closeMenu() {
        // let dp = findDOMNode(this);
        this.setState({currentDpClassName: removeClass(this.state.currentDpClassName, "active")});
    }

    getDpClassName() {
        const {className, type, triggerBy, buttonDpClassName, textDpClassName} = this.props;
        let clsName = className;
        if (type === "button") {
            clsName = buttonDpClassName;
        }
        if (type === "text") {
            clsName = textDpClassName;
        }
        let dpClsName = this.state.currentDpClassName ? this.state.currentDpClassName : clsName;
        return classnames(dpClsName, {hover: this.isTriggeredByMouseHover()});
    }

    render() {
        const {
            onChange,
            openMenu,
            children,
            className,
            alignMenu
        } = this.props;
//dp hover active/close
        return (
            <div className={this.getDpClassName()}
                 onClick={::this.handleClick}>
                <WindowEventHandler onClick={this.closeMenu.bind(this)}/>
                {children}
            </div>
        );
    }
}