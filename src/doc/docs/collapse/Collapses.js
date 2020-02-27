import React, {useState} from 'react';
import SamplePannel from '../../common/SamplePannel';
import CollapsePanel from '../../../react-wui-modern/collapse/CollapsePanel';
import {
  Divider,
  Card,
  Button,
  IconHome,
  IconSearch, IconStar, IconList,
} from '../../../react-wui-modern';
import Collapse from '../../../react-wui-modern/collapse/Collapse';

export const SimpleCollapse = (props) => {
  const [collapse, setCollapse] = useState(true);
  const comp = <>
    <Button type="primary"
            style={{marginBottom: '1rem'}}
            onClick={() => setCollapse(col => !col)}>Toggle</Button>
    <CollapsePanel collapse={collapse}>
      <Card block>
        <Card.Body>
          Card Body.Card Body.Card Body.Card Body.Card Body.Card Body.
        </Card.Body>
      </Card>
    </CollapsePanel>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};

export const CollapseCard = (props) => {
  const comp = <>
    <Collapse accordion={false} defaultActive={[1]}>
      <Collapse.Item header="Header1" hasBackground value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};

export const CollapseCard2 = (props) => {
  const comp = <>
    <Collapse hasBox={false} hasBorder={true} accordion={true}
              style={{padding: '0 1rem'}}>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>

    <Collapse hasBox={false} hasBorder={false} accordion={true}
              style={{padding: '0 1rem', marginTop: '1rem'}}>
      <Divider/>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
    </Collapse>


    <Collapse hasBox={false} hasBorder={false} accordion={true}
              iconPosition="right"
              style={{padding: '0 1rem', marginTop: '1rem'}}>
      <Divider/>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
    </Collapse>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};

export const CollapseCard3 = (props) => {
  const comp = <>
    <Collapse hasBox={false} hasBorder={false} accordion={true}
              iconPosition="left"
              collapseIcon={<IconHome/>}
              style={{padding: '0 1rem', marginTop: '1rem'}}>
      <Divider/>
      <Collapse.Item header="Header1" value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header2" value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Divider/>
    </Collapse>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};

export const CollapseCard4 = (props) => {
  const comp = <>
    <Collapse
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2}
                     moreItems={<span onClick={(e) => {
                       alert('hello');
                       e.stopPropagation();
                     }}>More</span>}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};

export const CollapseCard5 = (props) => {
  const [displayItems, set] = useState([]);

  const change = (value, isCollapsed) => {
    if (isCollapsed) {
      set(pre => pre.filter(v => v !== value));
    } else {
      set(pre=> [...pre, value]);
    }
  };

  const comp = <>
    <Collapse
        active={displayItems}
        onChange={change}
        accordion={true}
        iconPosition="left">
      <Collapse.Item header="Header1" value={1}
                     moreItems={[
                       <IconSearch/>,
                       <IconList/>]}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" value={2}
                     moreItems={<span>More</span>} disabled>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" value={3} disabled>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return <SamplePannel component={comp} code={''}/>;
};