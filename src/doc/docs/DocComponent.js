import React, {Component} from 'react';
import scrollToElement from "scroll-to-element";

export default class DocComponent extends Component {

  /**
   * Scroll to a element
   *
   * elem: element's id or class selector
   */
  scrollTo(elem) {
    scrollToElement(
        elem, {
          offset: -100,
          ease: "out-circ",
          duration: 200
        }
    )
  }

}