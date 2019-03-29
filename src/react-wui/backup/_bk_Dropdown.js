import React, {Component} from "react"
import {generateClassName, hasClass, toggleClass, updateChildrenByCallback, updateChildrenBySetting} from "../Utils";
import {Menu} from "../menu/Menu";

export default class Dropdown extends Component {
    static defaultProps = {
        className: "dropdown",

        hover_id: "hover",
        click_id: "click"
    };

    //current menu node that will render
    menuNode = null;

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

    handleMouseHover() {
        return
        /*if (!this.isTriggeredByMouseHover()) {
            return;
        }
        this.toggleMenuStatus();*/
    }

    handleClick() {
        this.toggleMenuStatus();
    }

    toggleMenuStatus() {
        const {children} = this.props;
        let menu = this.menuNode ? this.menuNode : children.find(item => hasClass(item, "menu"));
        if (menu) {
            let newDpClassName = toggleClass(menu, "active");
            console.log("close or show menu" + newDpClassName);
            this.setState({currentDpClassName: newDpClassName});
        }
    }

    updateChildren() {
        let chd = this.props.children;

        //only one menu is allowed to be inserted within dropdown
        let menuIndex = chd.findIndex(item => hasClass(item, "menu"));
        let menu = chd[menuIndex];
        let cmClassName = this.state.currentDpClassName;

        if (menu && cmClassName) {
            let newChild = chd.slice(0, menuIndex);
            let newMenu = React.cloneElement(menu, {className: cmClassName});

            this.menuNode = newMenu;
            newChild.push(newMenu);

            for (let i = menuIndex + 1; i < chd.length; i++) {
                newChild.push(chd[i]);
            }
            return newChild;
        }
        return chd;
    }

    render() {
        const {
            triggerBy, /*trigger showing the menu by click or hover event*/
            openMenu,
            children,
            className,
            alignMenu
        } = this.props;

        return (
            <div className={className} onClick={::this.handleClick}>
                {this.updateChildren()}
            </div>
        );
    }
}