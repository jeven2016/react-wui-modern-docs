import React, {useState} from 'react';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {
  Button,
  Card,
  Dropdown,
  IconHome,
  Menu,
  Radio,
  Tabs,
  RadioGroup, Checkbox,
} from '../../../react-wui-modern';
import {Tooltip} from 'react-wui-modern';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const TestSw = () => {
  const [index, setIndex] = useState(0);
  console.log('update....');
  const onChangeIndex = (index, indexLatest, meta) => {
    console.log(
        `onChangeIndex: index=${index} indexLatest: ${indexLatest} meta=`);
    console.log(meta);
    setIndex(index);
  };

  const onSwitching = (index, type) => {
    console.log(`onSwitching=${index} ${type}`);
  };

  const onTransitionEnd = () => {
    console.log(`onTransitionEnd`);
  };

  const mout = () => {
    console.log('mount');
  };
  return <>

    <div
        className="tab tab-bar horizontal bottom with-border secondary-card scrollable">
      <div className="tab-pre horizontal">&lt;</div>
      <div className="tab-next horizontal">&gt;</div>
      <div className="tab-container">
        <div className="tab-scroll">
          <div className="tab-item active">
            Item 1
          </div>
          <div className="tab-item">
            <div className="item-label">Item 2</div>
            <div className="item-icon">
              X
            </div>
          </div>
          <div className="tab-item">
            Item 3
          </div>
        </div>
      </div>
    </div>

    <Button outline color="green" active={index == 0}
            onClick={() => setIndex(0)}>第1个</Button>
    <Button outline color="green" active={index == 1}
            onClick={() => setIndex(1)}>第2个</Button>
    <Button outline color="green" active={index == 2}
            onClick={() => setIndex(2)}>第3个</Button>
    <SwipeableViews index={index} enableMouseEvents
                    onChangeIndex={onChangeIndex}
                    action={mout}
                    animateHeight
                    resistance
                    resistance
                    onTransitionEnd={onTransitionEnd}>
      <Card block>
        <Card.Header hasBackground>
          左右拖动
        </Card.Header>
        <Card.Body>
          Body1
        </Card.Body>
      </Card>
      <Card block>
        <Card.Header hasBackground>
          Hello12
        </Card.Header>
        <Card.Body>
          Body12
        </Card.Body>
      </Card>
      <Card block>
        <Card.Header hasBackground>
          Hello13
        </Card.Header>
        <Card.Body>
          Body13
        </Card.Body>
      </Card>
    </SwipeableViews>
  </>;
};

export const AutoPlayCom = () => {
  const [index, setIndex] = useState(0);
  console.log('update....');
  const onChangeIndex = (index, indexLatest, meta) => {
    console.log(
        `onChangeIndex: index=${index} indexLatest: ${indexLatest} meta=`);
    console.log(meta);
    setIndex(index);
  };

  const onSwitching = (index, type) => {
    console.log(`onSwitching=${index} ${type}`);
  };

  const onTransitionEnd = () => {
    console.log(`onTransitionEnd`);
  };

  const mout = () => {
    console.log('mount');
  };
  return <>
    <Button outline color="green" active={index == 0}
            onClick={() => setIndex(0)}>第1个</Button>
    <Button outline color="green" active={index == 1}
            onClick={() => setIndex(1)}>第2个</Button>
    <Button outline color="green" active={index == 2}
            onClick={() => setIndex(2)}>第3个</Button>
    <AutoPlaySwipeableViews index={index}
                            enableMouseEvents
                            animateTransitions={true}
                            axis='y'
                            onChangeIndex={onChangeIndex}
                            action={mout}
                            animateHeight
                            resistance
                            onTransitionEnd={onTransitionEnd}>
      <Card block>
        <Card.Header hasBackground>
          左右拖动
        </Card.Header>
        <Card.Body>
          Body1
        </Card.Body>
      </Card>
      <Card block>
        <Card.Header hasBackground>
          Hello12
        </Card.Header>
        <Card.Body>
          Body12
        </Card.Body>
      </Card>
      <Card block>
        <Card.Header hasBackground>
          Hello13
        </Card.Header>
        <Card.Body>
          Body13
        </Card.Body>
      </Card>
    </AutoPlaySwipeableViews>
  </>;
};

export const SimpleTab = (props) => {
  const [position, setPosition] = useState('top');
  const [scrollable, setScrollable] = useState(true);
  const [type, setType] = useState('normal');
  const [removable, setRemovable] = useState(false);

  const tabs = [...Array(30).keys()].map(
      i => ({key: i, value: i, title: `Item-${i}`, content: `Content-${i}`}
      ));
  const [tabConfig, setTabConfig] = useState({
    tabArray: tabs,
    defaultActive: 29,
  });

  const change = (value) => {
    setPosition(value);
  };

  const removeItem = (value) => {
    let nextActive = value === tabConfig.defaultActive
        ? value - 1
        : tabConfig.defaultActive;
    console.log(nextActive);

    setTabConfig(
        pre => ({
          tabArray: pre.tabArray.filter(s => s.value !== value),
          defaultActive: nextActive,
        }));
  };

  return <>
    <div>
      <Dropdown selectable onSelect={itemInfo => {
        setType(itemInfo.value);
      }}>
        <Dropdown.Title>
          <Button type="primary">Tab Type</Button>
        </Dropdown.Title>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item value="normal">normal</Menu.Item>
            <Menu.Item value="card">card</Menu.Item>
            <Menu.Item value="secondaryCard">secondaryCard</Menu.Item>
          </Menu.List>
        </Menu>
      </Dropdown>
    </div>
    <RadioGroup defaultValue={position}
                onChange={change} style={{marginBottom: '1rem'}}>
      <Radio value="top">Top</Radio>
      <Radio value="bottom">Bottom</Radio>
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
    </RadioGroup>
    <RadioGroup defaultValue={scrollable}
                onChange={(val) => setScrollable(val)}
                style={{marginBottom: '1rem'}}>
      <Radio value={true}>Scrollable</Radio>
      <Radio value={false}>Non-scrollable</Radio>
    </RadioGroup>
    <Tabs position={position}
          defaultActive={tabConfig.defaultActive}
          type={type}
          scrollable={scrollable}
          style={{maxHeight: '300px'}}
          hasBorder>
      <Tabs.Items>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabItem value={tabSetting.value} key={tabSetting.key}>
                <Tooltip body={'tttt'}><span>{tabSetting.title}</span></Tooltip>
              </Tabs.TabItem>,
          )
        }
      </Tabs.Items>
      <Tabs.Panels>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabPanel itemValue={tabSetting.value}
                             key={`panel-${tabSetting.value}`}>
                <Card block>
                  <Card.Body>
                    {tabSetting.content}
                    <div style={{marginTop: '10rem'}}>......</div>
                  </Card.Body>
                </Card>
              </Tabs.TabPanel>,
          )
        }
      </Tabs.Panels>
    </Tabs>
  </>;
};

export const RemovableTab = (props) => {
  const [position, setPosition] = useState('top');
  const [scrollable, setScrollable] = useState(true);
  const [type, setType] = useState('normal');
  const [removable, setRemovable] = useState(false);

  const tabs = [...Array(30).keys()].map(
      i => ({key: i, value: i, title: `Item-${i}`, content: `Content-${i}`}
      ));
  const [tabConfig, setTabConfig] = useState({
    tabArray: tabs,
    active: 29,
  });

  const change = (value) => {
    setPosition(value);
  };

  const changeTab = (tabValue) => {
    setTabConfig(pre => ({tabArray: pre.tabArray, active: tabValue}));
  };

  const removeItem = (value) => {
    let nextActive = value === tabConfig.active
        ? value - 1
        : tabConfig.active;

    setTabConfig(
        pre => ({
          tabArray: pre.tabArray.filter(s => s.value !== value),
          active: nextActive,
        }));
  };

  return <>
    <div>
      <Dropdown selectable onSelect={itemInfo => {
        setType(itemInfo.value);
      }}>
        <Dropdown.Title>
          <Button type="primary">Tab Type</Button>
        </Dropdown.Title>
        <Menu hasBorder>
          <Menu.List>
            <Menu.Item value="normal">normal</Menu.Item>
            <Menu.Item value="card">card</Menu.Item>
            <Menu.Item value="secondaryCard">secondaryCard</Menu.Item>
          </Menu.List>
        </Menu>
      </Dropdown>
    </div>
    <RadioGroup defaultValue={position}
                onChange={change} style={{marginBottom: '1rem'}}>
      <Radio value="top">Top</Radio>
      <Radio value="bottom">Bottom</Radio>
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
    </RadioGroup>
    <RadioGroup defaultValue={scrollable}
                onChange={(val) => setScrollable(val)}
                style={{marginBottom: '1rem'}}>
      <Radio value={true}>Scrollable</Radio>
      <Radio value={false}>Non-scrollable</Radio>
    </RadioGroup>
    <Checkbox onChange={(val) => setRemovable(val)}>Removable</Checkbox>
    <Tabs position={position}
          active={tabConfig.active}
          type={type}
          scrollable={scrollable}
          onChange={changeTab}
          removable={removable}
          onRemove={removeItem}
          style={{maxHeight: '300px'}}
          hasBorder>
      <Tabs.Items>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabItem value={tabSetting.value} key={tabSetting.key}>
                <span>{tabSetting.title}</span>
              </Tabs.TabItem>,
          )
        }
      </Tabs.Items>
      <Tabs.Panels>
        {
          tabConfig.tabArray.map(tabSetting =>
              <Tabs.TabPanel itemValue={tabSetting.value}
                             key={`panel-${tabSetting.value}`}>
                <Card block>
                  <Card.Body>
                    {tabSetting.content}
                    <div style={{marginTop: '10rem'}}>......</div>
                  </Card.Body>
                </Card>
              </Tabs.TabPanel>,
          )
        }
      </Tabs.Panels>
    </Tabs>
  </>;
};

export const CardTab = (props) => {
  const [position, setPosition] = useState('top');
  const change = (value) => {
    setPosition(value);
  };

  return <>
    <RadioGroup defaultValue={position}
                onChange={change} style={{marginBottom: '1rem'}}>
      <Radio value="top">Top</Radio>
      <Radio value="bottom">Bottom</Radio>
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
    </RadioGroup>
    <Tabs position={position} type="card" defaultActive={1}>
      <Tabs.Items>
        <Tabs.TabItem value={1}>
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value={2}>
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value={3}>
          Item3ffffff
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue={1}>
          <Card block>
            <Card.Header hasBackground>
              card1
            </Card.Header>
            <Card.Body>
              card1
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue={2}>
          <Card block>
            <Card.Header hasBackground>
              card2
            </Card.Header>
            <Card.Body>
              card2
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue={3}>
          <Card block>
            <Card.Header hasBackground>
              card3
            </Card.Header>
            <Card.Body>
              card3
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
};

export const NoBorderTab = (props) => {
  const [position, setPosition] = useState('top');
  const [border, setBorder] = useState('none');
  const change = (value) => {
    setPosition(value);
  };
  const changeBorder = (borderValue) => {
    setBorder(borderValue);
  };

  return <>
    <RadioGroup defaultValue={position}
                onChange={change} style={{marginBottom: '1rem'}}>
      <Radio value="top">Top</Radio>
      <Radio value="bottom">Bottom</Radio>
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
    </RadioGroup>
    <RadioGroup defaultValue={border}
                onChange={changeBorder} style={{marginBottom: '1rem'}}>
      <Radio value="none">No border</Radio>
      <Radio value="one">One border</Radio>
      <Radio value="full">full border</Radio>
    </RadioGroup>
    <div style={{background: '#F5F5F5', padding: '1rem'}}>
      <Tabs position={position}
            type="card"
            hasBorder={false}
            cardBorder={border}
            defaultActive={1}>
        <Tabs.Items>
          <Tabs.TabItem value={1}>
            Item1
          </Tabs.TabItem>
          <Tabs.TabItem value={2}>
            Item2
          </Tabs.TabItem>
          <Tabs.TabItem value={3}>
            Item3ffffff
          </Tabs.TabItem>
        </Tabs.Items>
        <Tabs.Panels>
          <Tabs.TabPanel itemValue={1}>
            <Card block>
              <Card.Header hasBackground>
                card1
              </Card.Header>
              <Card.Body>
                card1
              </Card.Body>
            </Card>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue={2}>
            <Card block>
              <Card.Header hasBackground>
                card2
              </Card.Header>
              <Card.Body>
                card2
              </Card.Body>
            </Card>
          </Tabs.TabPanel>
          <Tabs.TabPanel itemValue={3}>
            <Card block>
              <Card.Header hasBackground>
                card3
              </Card.Header>
              <Card.Body>
                card3
              </Card.Body>
            </Card>
          </Tabs.TabPanel>
        </Tabs.Panels>
      </Tabs>
    </div>
  </>;
};

export const SecondaryCardTab = (props) => {
  const [position, setPosition] = useState('top');
  const change = (value) => {
    setPosition(value);
  };

  return <>
    <RadioGroup defaultValue={position}
                onChange={change} style={{marginBottom: '1rem'}}>
      <Radio value="top">Top</Radio>
      <Radio value="bottom">Bottom</Radio>
      <Radio value="left">Left</Radio>
      <Radio value="right">Right</Radio>
    </RadioGroup>
    <Tabs position={position} type="secondaryCard" defaultActive={1}>
      <Tabs.Items>
        <Tabs.TabItem value={1}>
          Item1
        </Tabs.TabItem>
        <Tabs.TabItem value={2}>
          Item2
        </Tabs.TabItem>
        <Tabs.TabItem value={3}>
          Item3ffffffdddddddd
        </Tabs.TabItem>
      </Tabs.Items>
      <Tabs.Panels>
        <Tabs.TabPanel itemValue={1}>
          <Card block>
            <Card.Header hasBackground>
              card1
            </Card.Header>
            <Card.Body>
              card1
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue={2}>
          <Card block>
            <Card.Header hasBackground>
              card2
            </Card.Header>
            <Card.Body>
              card2
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
        <Tabs.TabPanel itemValue={3}>
          <Card block>
            <Card.Header hasBackground>
              card3
            </Card.Header>
            <Card.Body>
              card3
            </Card.Body>
          </Card>
        </Tabs.TabPanel>
      </Tabs.Panels>
    </Tabs>
  </>;
};