import React from 'react';
import BaseComponent from "../BaseComponent";
import {isNil, ModalContext} from "../Utils";

export default class Header extends BaseComponent {
  static defaultProps = {
    className: 'header'
  };

  render() {
    const {children, className, appendClass} = this.props;
    let clsName = this.getClass();

    return <ModalContext.Consumer>
      {({onCancel}) => {
        let cancelIcon = isNil(onCancel) ? <span>×</span> :
            <span onClick={onCancel}>×</span>;

        return <div className={clsName}>
          <div className="title">{children}</div>
          <div className="icon">
            {cancelIcon}
          </div>
        </div>
      }
      }
    </ModalContext.Consumer>;
  }

}