import React, {useState, useRef} from 'react';
import {
  Button, IconInfo,
  Notification,
  Popover,
  useEvent,
} from '../../../react-wui-modern';
import SamplePannel from '../../common/SamplePannel';
import Form from '../../../react-wui-modern/Form';
import Select from '../../../react-wui-modern/select';

export const PopoverA = () => {
  let comp = <>
    <div>
      <Popover position="topLeft"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue"
                onClick={() => console.log('click button')}>Top Left</Button>
      </Popover>

      <Popover position="top"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Top</Button>
      </Popover>

      <Popover position="topRight"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Top Right</Button>
      </Popover>
    </div>

    <div style={{marginTop: '2rem'}}>
      <Popover position="bottomLeft" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom Left</Button>
      </Popover>

      <Popover position="bottom" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom</Button>
      </Popover>

      <Popover position="bottomRight" header="Header"
               body={<span>This is a sample</span>}>
        <Button outline={true} color="blue">Bottom Right</Button>
      </Popover>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const PopoverB = () => {
  let comp = <>
    <Popover triggerBy="hover" position="left" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue">Left</Button>
    </Popover>

    <Popover triggerBy="hover" position="right" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue">right</Button>
    </Popover>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};

export const PopoverC = () => {
  const [activeRole, setActiveRole] = useState(false);
  const [activeUserGroup, setActiveUserGroup] = useState(false);
  const [activePopover, setActivePopover] = useState(false);

  const [roleType, setRoleType] = useState();
  const [userGroupType, setUserGroupType] = useState();

  const popupRef = useRef();

  //add event listener to document
  useEvent('click', (e) => {
    const isClickedPopup = popupRef.current.contains(e.target);

    //if this event is  fired by clicking the body of the popover, close the popover.
    if (!isClickedPopup) {
      setActivePopover(false);
    }
  });

  const search = () => {
    const text = `
        roleType = ${roleType.value},
        userGroupType = ${userGroupType.value}
    `;
    Notification.simple({
      title: 'Searching',
      body: text,
      icon: <IconInfo/>,
      closable: true,
    });
    setActivePopover(false);
  };

  const AdvanceSearch = <div>
    <h4 className="text comment">高级搜索</h4>
    <Form nativeType="div">
      <Form.Item type="block">
        <label>角色组</label>
        <Select placeholder="..."
                block={true}
                active={activeRole}
                searchable={false}
                onActiveChange={(nextState) => {
                  setActiveRole(nextState);
                }}
                popupStyle={{zIndex: '1000'}}
                onChange={(item, e) => {
                  setRoleType(item);
                  setActiveRole(false);
                  e.stopPropagation();
                }}>
          <Select.Option value="admin">管理员</Select.Option>
          <Select.Option value="customer">客户</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block">
        <label>用户组</label>
        <Select placeholder="..." block
                active={activeUserGroup}
                searchable={false}
                onActiveChange={(nextState) => {
                  setActiveUserGroup(nextState);
                }}
                popupStyle={{zIndex: '1000'}}
                onChange={(item, e) => {
                  setUserGroupType(item);
                  setActiveUserGroup(false);
                  e.stopPropagation();
                }}>
          <Select.Option value="admin">普通员工</Select.Option>
          <Select.Option value="customer">管理岗</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item type="block"
                 style={{display: 'flex', justifyContent: 'center'}}>
        <Button color="blue" onClick={search}>搜索</Button>
      </Form.Item>
    </Form>
  </div>;

  let comp = <>

    <Popover body={AdvanceSearch} position="top" active={activePopover}
             popupRef={popupRef}
             onActiveChange={(nextState) => {
               if (nextState)
                 setActivePopover(nextState);
             }}>
      <Button>高级搜索</Button>
    </Popover>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Popover} from "react-wui";
  
 
  `;

  return <SamplePannel component={comp} code={code}/>;
};
