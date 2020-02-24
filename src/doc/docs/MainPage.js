import React, {useContext} from 'react';
import {Link, Route} from 'react-router-dom';
import intl from 'react-intl-universal';
import ButtonIndex from './button/ButtonIndex';
import MenuIndex from './menu/MenuIndex';
import {Button, Drawer, Input, InputGroup, Menu} from '../../react-wui-modern';
import DropdownIndex from './dropdown/DropdownIndex';
import NavbarIndex from './navbar/NavbarIndex';
import PopoverIndex from './popover/PopoverIndex';
import TooltipIndex from './tooltip/TooltipIndex';
import ModalIndex from './modal/ModalIndex';
import ToggleIndex from './toggle/ToggleIndex';
import CardIndex from './card/CardIndex';
import DrawerIndex from './drawer/DrawerIndex';
import AccordionIndex from './accordion/AccordionIndex';
import BlockquotaIndex from './blockquota/BlockquotaIndex';
import LoaderIndex from './loader/LoaderIndex';
import GridIndex from './grid/GridIndex';
import FormIndex from './form/FormIndex';
import AlertIndex from './alert/AlertIndex';
import BadgeIndex from './badge/BadgeIndex';
import CheckboxIndex from './checkbox/CheckboxIndex';
import RadioIndex from './radio/RadioIndex';
import BreadcrumbIndex from './breadcrumb/BreadcrumbIndex';
import SelectIndex from './select/SelectIndex';
import InputIndex from './input/InputIndex';
import MenuReducer from '../common/MenuReducer';
import ProgressIndex from './progress/ProgressIndex';
import LayoutIndex from './layout/LayoutIndex';
import LayoutA from './layout/LayoutA';
import DatePickerIndex from './datapicker/DatePickerIndex';
import SpringIndex from './spring/SpringIndex';
import TabsIndex from './tabs/TabsIndex';
import CarouselIndex from './carousel/CarouselIndex';
import AffixIndex from './affix/AffixIndex';
import CollapseIndex from './collapse/CollapseIndex';

const getMenu = (match, selectedItem) => {
  return <Menu block type="dark">
    <Menu.SubMenu>
      <Menu.Header id="header">Geting Started</Menu.Header>
      <Menu.List>
        <Menu.Item id="installItem">Install</Menu.Item>
        <Menu.Item id="basicItem">Basic</Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
    <Menu.SubMenu>
      <Menu.Header>Components</Menu.Header>
      <Menu.List>
        {/* <Menu.Item id="AccordionItem">
          <Link to={`${match.url}/components/accordion`}>
            {intl.get('main.navbar.accordion')}
          </Link>
        </Menu.Item>*/}
        <Menu.Item id="AlertItem">
          <Link to={`${match.url}/components/alert`}>
            {intl.get('main.navbar.alert')}
          </Link>
        </Menu.Item>
        <Menu.Item id="BadgeItem">
          <Link to={`${match.url}/components/badge`}>
            {intl.get('main.navbar.badge')}
          </Link>
        </Menu.Item>
        <Menu.Item id="BlockquoteItem">
          <Link to={`${match.url}/components/blockquota`}>
            {intl.get('main.navbar.blockquota')}
          </Link>
        </Menu.Item>
        <Menu.Item id="BreadcrumbItem">
          <Link to={`${match.url}/components/breadcrumb`}>
            {intl.get('main.navbar.breadcrumb')}
          </Link>
        </Menu.Item>
        <Menu.Item id="buttonItem">
          <Link to={`${match.url}/components/button`}>
            {intl.get('main.navbar.button')}
          </Link>
        </Menu.Item>
        <Menu.Item id="CheckboxItem">
          <Link to={`${match.url}/components/checkbox`}>
            {intl.get('main.navbar.checkbox')}
          </Link>
        </Menu.Item>
        <Menu.Item id="CardItem">
          <Link to={`${match.url}/components/card`}>
            {intl.get('main.navbar.card')}
          </Link>
        </Menu.Item>
        < Menu.Item id="DrawerItem">
          <Link to={`${match.url}/components/drawer`}>
            {intl.get('main.navbar.drawer')}
          </Link>
        </Menu.Item>
        <Menu.Item id="DropdownItem">
          <Link to={`${match.url}/components/dropdown`}>
            {intl.get('main.navbar.dropdown')}
          </Link>
        </Menu.Item>
        <Menu.Item id="FormItem">
          <Link to={`${match.url}/components/form`}>
            {intl.get('main.navbar.form')}
          </Link>
        </Menu.Item>
        <Menu.Item id="GridItem">
          <Link to={`${match.url}/components/grid`}>
            {intl.get('main.navbar.grid')}
          </Link>
        </Menu.Item>
        <Menu.Item id="InputItem">
          <Link to={`${match.url}/components/input`}>
            {intl.get('main.navbar.input')}
          </Link>
        </Menu.Item>
        <Menu.Item id="LoaderItem">
          <Link to={`${match.url}/components/loader`}>
            {intl.get('main.navbar.loader')}
          </Link>
        </Menu.Item>
        <Menu.Item id="MenuItem">
          <Link to={`${match.url}/components/menu`}>
            {intl.get('main.navbar.menu')}
          </Link>
        </Menu.Item>
        <Menu.Item id="ModalItem">
          <Link to={`${match.url}/components/modal`}>
            {intl.get('main.navbar.modal')}
          </Link>
        </Menu.Item>
        <Menu.Item id="NavbarItem">
          <Link to={`${match.url}/components/navbar`}>
            {intl.get('main.navbar.navbar')}
          </Link>
        </Menu.Item>
        <Menu.Item id="PopoverItem">
          <Link to={`${match.url}/components/popover`}>
            {intl.get('main.navbar.popover')}
          </Link>
        </Menu.Item>
        <Menu.Item id="ProgressItem">
          <Link to={`${match.url}/components/progress`}>
            {intl.get('main.navbar.progress')}
          </Link>
        </Menu.Item>
        <Menu.Item id="RadioItem">
          <Link to={`${match.url}/components/radio`}>
            {intl.get('main.navbar.radio')}
          </Link>
        </Menu.Item>
        <Menu.Item id="SlidershowItem">
          Slidershow 幻灯片
        </Menu.Item>
        <Menu.Item id="SelectItem">
          <Link to={`${match.url}/components/select`}>
            {intl.get('main.navbar.select')}
          </Link>
        </Menu.Item>
        <Menu.Item id="TableItem">
          Table 表格
        </Menu.Item>
        <Menu.Item id="ToggleItem">
          <Link to={`${match.url}/components/toggle`}>
            {intl.get('main.navbar.toggle')}
          </Link>
        </Menu.Item>
        <Menu.Item id="TooltipItem">
          <Link to={`${match.url}/components/tooltip`}>
            {intl.get('main.navbar.tooltip')}
          </Link>
        </Menu.Item>
        <Menu.Item id="datepickerItem">
          <Link to={`${match.url}/components/datepicker`}>
            {intl.get('main.navbar.datepicker')}
          </Link>
        </Menu.Item>
        <Menu.Item id="LayoutItem">
          <Link to={`${match.url}/components/layout`}>
            {intl.get('main.navbar.layout')}
          </Link>
        </Menu.Item>

        <Menu.Item id="SpringItem">
          <Link to={`${match.url}/components/spring`}>
            Spring测试
          </Link>
        </Menu.Item>
        <Menu.Item id="TabsItem">
          <Link to={`${match.url}/components/tabs`}>
            Tabs
          </Link>
        </Menu.Item>
        <Menu.Item id="CarouselItem">
          <Link to={`${match.url}/components/carousel`}>
            Carousel 轮播
          </Link>
        </Menu.Item>
        <Menu.Item id="AffixItem">
          <Link to={`${match.url}/components/affix`}>
            Affix
          </Link>
        </Menu.Item>
        <Menu.Item id="CollapseItem">
          <Link to={`${match.url}/components/collapse`}>
            Collapse 折叠
          </Link>
        </Menu.Item>
      </Menu.List>
    </Menu.SubMenu>
  </Menu>;
};
const getRoutes = (match) => {
  return <>
    <Route exact={true} path={`${match.url}/components/badge`}
           component={BadgeIndex}/>
    <Route exact={true} path={`${match.url}/components/blockquota`}
           component={BlockquotaIndex}/>
    <Route exact={true} path={`${match.url}/components/accordion`}
           component={AccordionIndex}/>
    <Route exact={true} path={`${match.url}/components/alert`}
           component={AlertIndex}/>
    <Route exact={true} path={`${match.url}/components/button`}
           component={ButtonIndex}/>
    <Route exact={true} path={`${match.url}/components/breadcrumb`}
           component={BreadcrumbIndex}/>
    <Route exact={true} path={`${match.url}/components/checkbox`}
           component={CheckboxIndex}/>
    <Route exact={true} path={`${match.url}/components/card`}
           component={CardIndex}/>
    <Route exact={true} path={`${match.url}/components/dropdown`}
           component={DropdownIndex}/>
    <Route exact={true} path={`${match.url}/components/drawer`}
           component={DrawerIndex}/>
    <Route exact={true} path={`${match.url}/components/form`}
           component={FormIndex}/>
    <Route exact={true} path={`${match.url}/components/grid`}
           component={GridIndex}/>
    <Route exact={true} path={`${match.url}/components/input`}
           component={InputIndex}/>
    <Route exact={true} path={`${match.url}/components/loader`}
           component={LoaderIndex}/>
    <Route exact={true} path={`${match.url}/components/menu`}
           component={MenuIndex}/>
    <Route exact={true} path={`${match.url}/components/modal`}
           component={ModalIndex}/>

    <Route exact={true} path={`${match.url}/components/navbar`}
           component={NavbarIndex}/>
    <Route exact={true} path={`${match.url}/components/popover`}
           component={PopoverIndex}/>
    <Route exact={true} path={`${match.url}/components/progress`}
           component={ProgressIndex}/>
    <Route exact={true} path={`${match.url}/components/radio`}
           component={RadioIndex}/>
    <Route exact={true} path={`${match.url}/components/select`}
           component={SelectIndex}/>
    <Route exact={true} path={`${match.url}/components/tooltip`}
           component={TooltipIndex}/>
    <Route exact={true} path={`${match.url}/components/layout`}
           component={LayoutIndex}/>
    <Route exact={true} path={`${match.url}/components/toggle`}
           component={ToggleIndex}/>
    <Route exact={true} path={`${match.url}/components/datepicker`}
           component={DatePickerIndex}/>
    <Route exact={true} path={`${match.url}/components/spring`}
           component={SpringIndex}/>
    <Route exact={true} path={`${match.url}/components/tabs`}
           component={TabsIndex}/>
    <Route exact={true} path={`${match.url}/components/carousel`}
           component={CarouselIndex}/>
    <Route exact={true} path={`${match.url}/components/affix`}
           component={AffixIndex}/>
    <Route exact={true} path={`${match.url}/components/collapse`}
           component={CollapseIndex}/>
  </>;
};

const MainPage = (props) => {
  const {match} = props;
  const {menuState, dispatch} = useContext(MenuReducer.context);

  const closeMenu = () => {
    dispatch({type: 'inactive'});
  };
  return (
      <>
        {
          //use context to pass dispatch and state, useReducer can not work as redux
        }
        <Drawer active={menuState.active} position="left" showMask={false}
                style={{width: '22rem', background: '#000c17'}}
                onClose={closeMenu}>
          <div>
            <div className="doc menu-title">React-wui</div>
            <div className="doc search-row">
              <InputGroup>
                <Input placeholder="Search..."/>
                <Button color="secondary">Search</Button>
              </InputGroup>
            </div>
          </div>
          {getMenu(match)}
        </Drawer>
        <div className="doc grid-row row">
          <div className="doc left-nav-col col-xs-12 col-md-2">
            {getMenu(match)}
          </div>
          {getRoutes(match)}

        </div>
      </>
  );
};

export default MainPage;