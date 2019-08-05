import {isNil} from "lodash";
import {MenuClassName} from "../common/Constants";

export const hasClass = (node, className) => !isNil(node.className) &&
    node.className.includes(className);

export const updateItem = (props, itemNodes, next, index) => {
  const {paddingLeftIncrement, paddingLeftUnit} = props;
  for (let elem in itemNodes) {
    let item = itemNodes[elem];
    if (hasClass(item, MenuClassName.submenu)) {
      updatePaddingLeft(item, ++index);
    }
    if (hasClass(item, MenuClassName.item)
        || hasClass(item, MenuClassName.header)) {
      item.style.paddingLeft = `${next
      * paddingLeftIncrement}${paddingLeftUnit}`;
    }
  }
};

export const updatePaddingLeft = (props, menu, index = 0) => {
  if (!props.setItemPaddingLeft) {
    return;
  }
  if (menu.hasChildNodes()) {
    let menuChildNodes = menu.childNodes;
    for (let elem in menuChildNodes) {
      let childNode = menuChildNodes[elem];
      if (hasClass(childNode, MenuClassName.list)) {
        updateItem(props, childNode.childNodes, index + 1, index);
      }
      if (hasClass(childNode, MenuClassName.header)) {
        updateItem(props, [childNode], index === 0 ? 1 : index, index);
      }
      if (hasClass(childNode, MenuClassName.submenu)) {
        updatePaddingLeft(props, childNode, index + 1);
      }
    }
  }
};

export const setPadding = (props, menu, index = 0) => {
  if (!props.setItemPaddingLeft) {
    return;
  }
  if (menu.hasChildNodes()) {
    let menuChildNodes = menu.childNodes;
    for (let elem in menuChildNodes) {
      let childNode = menuChildNodes[elem];
      if (hasClass(childNode, MenuClassName.list)) {
        updateItem(props, childNode.childNodes, index + 1, index);
      }
      if (hasClass(childNode, MenuClassName.header)) {
        updateItem(props, [childNode], index === 0 ? 1 : index, index);
      }
      if (hasClass(childNode, MenuClassName.submenu)) {
        updatePaddingLeft(props, childNode, index + 1);
      }
    }
  }
};