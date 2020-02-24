import React, {useRef, useState} from 'react';
import {Affix, Button, NavBar} from '../../../react-wui-modern';
import Checkbox from '../../../react-wui-modern/Checkbox';
import SamplePannel from '../../common/SamplePannel';

export const AffixBtn = (props) => {
  const wRef = useRef(null);
  const [disableAffixBtn, setDisableAffixBtn] = useState(false);
  const [disableAffixBtn2, setDisableAffixBtn2] = useState(false);
  const [disableAffixNav, setDisableAffixNav] = useState(false);

  const comp = <div>
    <section>
      <h3>Affix</h3>
      <div ref={wRef} style={{color: 'red'}}></div>
      <div>
        <Affix top={140} disabled={disableAffixBtn}>
          <Button color="green">Fixed top 140px</Button>
          <Checkbox
              onChange={(val) => setDisableAffixBtn(val)}>Disable</Checkbox>
        </Affix>
      </div>
      <div style={{marginTop: '50px'}}>
        <Affix top={200} disabled={disableAffixBtn2}>
          <Button color="green">Fixed top 200px</Button>
          <Checkbox
              onChange={(val) => setDisableAffixBtn2(val)}>Disable</Checkbox>
        </Affix>
      </div>

      <div style={{marginTop: '50px'}}>
        <Affix top={70} block disabled={disableAffixNav}>
          <NavBar type="primary">
            <NavBar.Title>
              Top 70px
            </NavBar.Title>
            <NavBar.List>
              <NavBar.Item>
                用户
              </NavBar.Item>
              <NavBar.Item>
                角色
              </NavBar.Item>
              <NavBar.Item>
                权限
              </NavBar.Item>
              <NavBar.Item>
                安全
              </NavBar.Item>
              <NavBar.Item>
                <Checkbox onChange={(val) => setDisableAffixNav(
                    val)}>Disable</Checkbox>
              </NavBar.Item>
            </NavBar.List>
          </NavBar>
        </Affix>
      </div>

      <Affix bottom={50}>
        <Button color="green">Fixed bottom 50px</Button>
      </Affix>

    </section>

  </div>;
  return <SamplePannel component={comp} code={''}/>;
};