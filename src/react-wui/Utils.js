import React, {Component} from "react";
import {isString} from "lodash";

export const isArray = (value) => {
    // return Object.prototype.toString.call(value) === "[object Array]";
    return Array.isArray(value);
};

export const updateChildrenBySetting = (children, newSettings) => {
    let newChildren = React.Children.map(children, elem =>
        React.cloneElement(elem, newSettings)
    );
    return newChildren;
};


export const updateChildren = (children, map, newSettings) => {
    let newChildren = children;
    if (children && isArray(children) && map.size > 0) {
        newChildren = updateChildrenBySetting(children, newSettings);
    }
    return newChildren;
};

export const updateChildrenByCallback = (children, callback) => {
    let newChildren = children;
    if (children && isArray(children)) {
        newChildren = React.Children.map(children, callback);
    }
    return newChildren;
};

export const setValueInMap = (map, key, value) => {
    if (!key || !value) {
        return;
    }
    map.set(key, value);
};

export const generateClassName = (map, classNameSuffix) => {
//get the final class to set
    let finalClassName = classNameSuffix ? classNameSuffix : "";
    map.forEach((val, key) => {
        if (val) {
            finalClassName += " " + val;
        }
    });
    return finalClassName;
};

//split the class by blank space
const _splitClassName = (className) => {
    if (!className) {
        return [];
    }
    return className.split(" ");
};

/**
 * Check if the element has a specified class
 * @param elem
 * @param classNameOrArray a single class or an array of classes
 * @param clsArray
 * @return array
 */
export const hasClass = (elem, classNameOrArray, clsArray/*optional*/) => {
    if (!classNameOrArray) {
        return false;
    }

    if (!clsArray) {
        clsArray = _splitClassName(elem.props.className)
    }
    if (isArray(classNameOrArray)) {
        let result = clsArray.find(cls => classNameOrArray.includes(cls));
        if (result) {
            return true;
        }
        return false;
    } else {
        return clsArray.includes(classNameOrArray);
    }
};

export const appendClassIfAbsent = (elem, className) => {
    if (!hasClass(elem, className)) {
        return `${elem.props.className} ${className}`;
    }
    return elem.props.className;
};

export const removeClass = (className, classToRemove) => {
    if (!className) {
        return "";
    }
    return className.replace(classToRemove, "");
};

/**
 * Toggle the class and return it
 * @param elem NodeElement or className string
 * @param className
 * @return {string|*}
 */
export const toggleClass = (elem, className) => {
    if (!className) {
        throw  new Error(`The className parameter(${className}) is invalid.`)
    }

    let cls = isString(elem) ? elem : elem.props.className;
    let clsArray = _splitClassName(cls);
    if (hasClass(elem, className, clsArray)) {
        clsArray = clsArray.filter(value => value !== className);
    } else {
        clsArray.push(className);
    }

    return clsArray.join(" ");
};

export const getRandomValue = () => {
    return Math.random();
};

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};