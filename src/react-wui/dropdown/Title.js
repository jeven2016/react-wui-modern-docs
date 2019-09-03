import React from 'react';
import BaseComponent from '../BaseComponent';
import Button from '../button';
import Element from '../common/Element';

//todo remove .title, the title can only be button / span
export default class Title extends BaseComponent {
  render() {
    const {
      className = 'title',
      onClick,
      ...otherProps
    } = this.props;
    return (
        <Element
            onClick={onClick}
            className={className}
            {...otherProps}/>
    );
  }

}