import React, {useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import {Toggle, Tree} from '../../../react-wui-modern';
import {random} from '../../../react-wui-modern/Utils';

export const TreeA = () => {
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [onlySelectLeaf, setOnlySelectLeaf] = useState(false);
  const [checkable, setCheckable] = useState(false);
  const [highlightLine, setHighlightLine] = useState(false);
  let comp = <>
    <div>
      <Toggle active={multipleSelect}
              onChange={(val) => setMultipleSelect(val)}/>Multiple Selection
      <br/>
      <Toggle active={onlySelectLeaf} size="small"
              onChange={(val) => setOnlySelectLeaf(val)}/>Only Select Leaf
      <br/>
      <Toggle active={checkable}
              onChange={(val) => setCheckable(val)}/>Checkable
      <br/>
      <Toggle active={highlightLine}
              onChange={(val) => setHighlightLine(val)}/>Highlight Line
      <br/>
      <br/>
    </div>
    <Tree selectMultipleItems={multipleSelect} onlySelectLeaf={onlySelectLeaf}
          highlightLine={highlightLine}
          checkable={checkable}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
        <Tree.TreeItem id="Child-1-1" label="Child-1-1"/>
        <Tree.TreeItem id="Child-1-2" label="Child-1-2"/>
        <Tree.TreeItem id="Child-1-3" label="Child-1-3"/>
        <Tree.TreeItem id="Child-1-4" label="Child-1-4"/>
        <Tree.TreeItem id="Child-1-5" label="Child-1-5">
          <Tree.TreeItem id="Child-1-5-1" label="Child-1-5-1"/>
          <Tree.TreeItem id="Child-1-5-2" label="Child-1-5-2"/>
          <Tree.TreeItem id="Child-1-5-3" label="Child-1-5-3"/>
          <Tree.TreeItem id="Child-1-5-4" label="Child-1-5-4"/>

          <Tree.TreeItem id="Child-3-5" label="Child-3-5">
            <Tree.TreeItem id="Child-3-5-1" label="Child-3-5-1"/>
            <Tree.TreeItem id="Child-3-5-2" label="Child-3-5-2"/>
            <Tree.TreeItem id="Child-3-5-3" label="Child-3-5-3"/>
            <Tree.TreeItem id="Child-3-5-4" label="Child-3-5-4"/>
          </Tree.TreeItem>
        </Tree.TreeItem>

        <Tree.TreeItem id="Child-2-5" label="Child-2-5">
          <Tree.TreeItem id="Child-2-5-1" label="Child-2-5-1"/>
          <Tree.TreeItem id="Child-2-5-2" label="Child-2-5-2"/>
          <Tree.TreeItem id="Child-2-5-3" label="Child-2-5-3"/>
          <Tree.TreeItem id="Child-2-5-4" label="Child-2-5-4"/>
        </Tree.TreeItem>
      </Tree.TreeItem>
      <Tree.TreeItem id="Child-4-5" label="Child-4-5">
        <Tree.TreeItem id="Child-4-5-1" label="Child-4-5-1">
          <Tree.TreeItem id="Child-4-5-2" label="Child-4-5-2"/>
          <Tree.TreeItem id="Child-4-5-3" label="Child-4-5-3"/>
        </Tree.TreeItem>
        <Tree.TreeItem id="Child-5-5-1" label="Child-5-5-1">
          <Tree.TreeItem id="Child-5-5-2" label="Child-5-5-2"/>
          <Tree.TreeItem id="Child-5-5-3" label="Child-5-5-3"/>
        </Tree.TreeItem>
      </Tree.TreeItem>
    </Tree>


  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const TreeB = () => {
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [onlySelectLeaf, setOnlySelectLeaf] = useState(false);
  const [checkable, setCheckable] = useState(false);
  const [highlightLine, setHighlightLine] = useState(false);

  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',

        children: [
          {
            id: 'Child-1-1-1',
            label: 'Child-1-1-1',
          },
        ],

      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
          },
        ],

      },
    ],

  };

  let comp = <>
    <div>
      <Toggle active={multipleSelect}
              onChange={(val) => setMultipleSelect(val)}/>Multiple Selection
      <br/>
      <Toggle active={onlySelectLeaf} size="small"
              onChange={(val) => setOnlySelectLeaf(val)}/>Only Select Leaf
      <br/>
      <Toggle active={checkable}
              onChange={(val) => setCheckable(val)}/>Checkable
      <br/>
      <Toggle active={highlightLine}
              onChange={(val) => setHighlightLine(val)}/>Highlight Line
      <br/>
      <br/>
    </div>
    <Tree jsonData={jsonData}
          selectMultipleItems={multipleSelect}
          onlySelectLeaf={onlySelectLeaf}
          highlightLine={highlightLine}
          checkable={checkable}>
    </Tree>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const TreeC = () => {
  // a tree item set isLeaf to false and no children set , its children will be asynchronously loaded
  // by calling loadJsonData() method
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [onlySelectLeaf, setOnlySelectLeaf] = useState(false);
  const [checkable, setCheckable] = useState(false);
  const [highlightLine, setHighlightLine] = useState(false);

  const jsonData = {
    id: 'root',
    label: 'Root',
    children: [
      {
        id: 'Child-1-1',
        label: 'Child-1-1',
        isLeaf: false, //it should not be represented as leaf node and async load it by calling loadJsonData() method
      },
      {
        id: 'Child-1-2',
        label: 'Child-1-2',

        children: [
          {
            id: 'Child-1-2-1',
            label: 'Child-1-2-1',
            isLeaf: true,
          },
        ],

      },
    ],

  };

  const loadData = (id) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            id: id + '-1',
            label: id + '-1',
            isLeaf: false,
          },
          {
            id: id + '-2',
            label: id + '-2',
            isLeaf: true,
          }]);
      }, 1000);
    });
  };

  let comp = <>
    <div>
      <Toggle active={multipleSelect}
              onChange={(val) => setMultipleSelect(val)}/>Multiple Selection
      <br/>
      <Toggle active={onlySelectLeaf} size="small"
              onChange={(val) => setOnlySelectLeaf(val)}/>Only Select Leaf
      <br/>
      <Toggle active={checkable}
              onChange={(val) => setCheckable(val)}/>Checkable
      <br/>
      <Toggle active={highlightLine}
              onChange={(val) => setHighlightLine(val)}/>Highlight Line
      <br/>
      <br/>
    </div>
    <Tree jsonData={jsonData}
          loadJsonData={loadData}
          selectMultipleItems={multipleSelect}
          onlySelectLeaf={onlySelectLeaf}
          highlightLine={highlightLine}
          checkable={checkable}>
    </Tree>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const TreeD = () => {
  const [active, setActive] = useState(true);
  let comp = <>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Toggle} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
