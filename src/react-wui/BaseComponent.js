import React, {Component} from "react";
import shallowEqual from "shallowequal";

export default class BaseComponent extends Component {

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !shallowEqual(this.state === nextState) || !shallowEqual(this.props,
        nextProps);
  }
}