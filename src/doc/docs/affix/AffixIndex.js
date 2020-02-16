import React from 'react';
import intl from 'react-intl-universal';
import DocComponent from '../DocComponent';
import {NavBar, Affix, Button} from '../../../react-wui-modern';

export default class AffixIndex extends DocComponent {
  constructor(args) {
    super(args);
    this.clickLink = this.clickLink.bind(this);
  }

  render() {
    return this.content();
  }

  clickLink(id) {
    this.scrollTo(id);
  }

  content() {
    let cnt = <>
      <div className="doc center-col col-xs-12 col-md-8" style={{height: "1000px"}}>
        <h2 id="menu_title">{intl.get('content.alert.title')}</h2>
        <p>
          {intl.get('content.alert.simple.desc')}
        </p>

        <section>
          <h3>Affix</h3>

          <Affix top={'30px'}>
            <Button color="green" style={{marginTop: '100px'}}>Fix top</Button>
          </Affix>

          <NavBar>
            <NavBar.Title>
              Navbar
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
            </NavBar.List>
          </NavBar>
        </section>


      </div>

      <div className="doc right-col col-md-2">

      </div>
    </>;

    return cnt;
  }
}