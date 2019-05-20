import React from 'react';
import BaseComponent from "./BaseComponent";
import {Position} from "./common/Constants";

export default class Tooltip extends BaseComponent {
  static defaultProps = {
    className: 'tooltip',
    body: null,
    position: Position.bottom
  };

  static propTypes = {};

  constructor(args) {
    super(args)
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
  }
}
