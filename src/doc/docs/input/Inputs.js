import React from 'react';
import SamplePannel from '../../common/SamplePannel';
import {
  Button,
  ButtonGroup,
  Dropdown,
  IconSearch,
  Input,
  InputGroup,
  Menu,
  Radio
} from "react-wui-modern";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

export const A = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input placeholder="This is a small input" size="small"/>
    </div>
    <div className="doc doc-row">
      <Input placeholder="This is a input"/>
    </div>
    <div className="doc doc-row">
      <Input placeholder="This is a largeinput" size="large"/>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const A1 = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input type="textarea" rows="2" cols="10" placeholder="type=textarea"/>
    </div>
    <div className="doc doc-row">
      <Input type="number" placeholder="type=number"/>
    </div>
    <div className="doc doc-row">
      <Input type="date" placeholder="type=date"/>
    </div>
    <div className="doc doc-row">
      <Input type="datetime" placeholder="type=datetime"/>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const B = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input.IconInput size="small">
        <Input placeholder="This is a small input"/>
        <IconSearch/>
      </Input.IconInput>
      <Button size="small">Small</Button>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="medium">
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="large">
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const C = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input.IconInput size="small" leftIcon>
        <Input placeholder="This is a small input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="medium" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="large" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const D = () => {
  let comp = <>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Input placeholder="money......"/>
        <InputGroup.Label>$</InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
        <Button color="secondary">Buy</Button>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          <Radio value="ok"/>
        </InputGroup.Label>
        <Input placeholder="money......"/>
        <Button>Buy</Button>
        <InputGroup.Label>
          Return
        </InputGroup.Label>
        <InputGroup.Label>
          Option
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Dropdown type="button">
          <Dropdown.Title>
            <Button color="primary">Options</Button>
          </Dropdown.Title>
          <Menu>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
        <Input placeholder="money......"/>
        <ButtonGroup>
          <Button color="green">Button</Button>
          <Dropdown type="button" position="bottomRight">
            <Dropdown.Title>
              <Button color="green">
                <FontAwesomeIcon icon={faArrowDown}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item value={1} text="Action 1"/>
                <Menu.Item value={2} text="Action 2"/>
                <Menu.Item value={3} text="Action 3"/>
                <Menu.Item value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </ButtonGroup>
      </InputGroup>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const E = () => {
  let comp = <>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input placeholder="Money...."/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input placeholder="Money...."/>
        <Input placeholder="Money...."/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
        <InputGroup.Label>
          End
        </InputGroup.Label>
        <InputGroup.Label>
          End
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
        <InputGroup.Label>
          Search
        </InputGroup.Label>
      </InputGroup>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  null;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const F = () => {
  let comp = <>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input placeholder="Money...."/>
        <Dropdown type="button" position="bottomLeft">
          <Dropdown.Title>
            <Button color="primary" outline={true}>Action</Button>
          </Dropdown.Title>
          <Menu>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input placeholder="Money...."/>
        <Dropdown type="button" position="bottomLeft">
          <Dropdown.Title>
            <Button color="primary" outline={true}>Action</Button>
          </Dropdown.Title>
          <Menu>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
        <Dropdown type="button" position="bottomLeft">
          <Dropdown.Title>
            <Button color="primary" outline={true}>Action</Button>
          </Dropdown.Title>
          <Menu>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
        <InputGroup.Label>
          End
        </InputGroup.Label>
        <Dropdown triggerBy="hover">
          <Dropdown.Title>Click</Dropdown.Title>
          <Menu>
            <Menu.List>
              <Menu.Item id={1} value={1} text="Action 1"/>
              <Menu.Item id={2} value={2} text="Action 2"/>
              <Menu.Item id={3} value={3} text="Action 3"/>
              <Menu.Item id={4} value={4} text="Action 4"/>
            </Menu.List>
          </Menu>
        </Dropdown>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
        <ButtonGroup>
          <Button color="green" outline={true}>Search</Button>
          <Dropdown type="button" position="bottomRight">
            <Dropdown.Title>
              <Button color="green">
                <FontAwesomeIcon icon={faArrowDown}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item value={1} text="Action 1"/>
                <Menu.Item value={2} text="Action 2"/>
                <Menu.Item value={3} text="Action 3"/>
                <Menu.Item value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </ButtonGroup>
      </InputGroup>
    </div>

    <div className="doc doc-row">
      <InputGroup>
        <ButtonGroup>
          <Button color="green" outline={true}>Search</Button>
          <Dropdown type="button" position="bottomRight">
            <Dropdown.Title>
              <Button color="green">
                <FontAwesomeIcon icon={faArrowDown}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item value={1} text="Action 1"/>
                <Menu.Item value={2} text="Action 2"/>
                <Menu.Item value={3} text="Action 3"/>
                <Menu.Item value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </ButtonGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
      </InputGroup>
    </div>


    <div className="doc doc-row">
      <InputGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
        <ButtonGroup>
          <Button color="green" outline={true}>Search</Button>
          <Dropdown type="button" position="bottomRight">
            <Dropdown.Title>
              <Button color="green">
                <FontAwesomeIcon icon={faArrowDown}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item value={1} text="Action 1"/>
                <Menu.Item value={2} text="Action 2"/>
                <Menu.Item value={3} text="Action 3"/>
                <Menu.Item value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </ButtonGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
      </InputGroup>
    </div>

  </>;

  let code = `
  import React, {Component} from "react";
  import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
  import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
  import {Menu,InputGroup,Input,Dropdown,Button,Font} from "react-wui";
  
  export default class Sample extends Component{
  
    render(){
      return <>
        <div className="doc doc-row">
        <InputGroup>
          <InputGroup.Label>
            $
          </InputGroup.Label>
          <Input placeholder="Money...."/>
          <Dropdown type="button" position="bottomLeft">
            <Dropdown.Title>
              <Button color="primary" outline={true}>Action</Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </InputGroup>
      </div>
      <div className="doc doc-row">
        <InputGroup>
          <InputGroup.Label>
            $
          </InputGroup.Label>
          <Input placeholder="Money...."/>
          <Dropdown type="button" position="bottomLeft">
            <Dropdown.Title>
              <Button color="primary" outline={true}>Action</Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
          <Dropdown type="button" position="bottomLeft">
            <Dropdown.Title>
              <Button color="primary" outline={true}>Action</Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </InputGroup>
      </div>
      <div className="doc doc-row">
        <InputGroup>
          <InputGroup.Label>
            $
          </InputGroup.Label>
          <Input.IconInput>
            <Input placeholder="This is an input"/>
            <IconSearch/>
          </Input.IconInput>
          <InputGroup.Label>
            End
          </InputGroup.Label>
          <Dropdown triggerBy="hover">
            <Dropdown.Title>Click</Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item id={1} value={1} text="Action 1"/>
                <Menu.Item id={2} value={2} text="Action 2"/>
                <Menu.Item id={3} value={3} text="Action 3"/>
                <Menu.Item id={4} value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </InputGroup>
      </div>
      <div className="doc doc-row">
        <InputGroup>
          <Input.IconInput>
            <Input placeholder="This is an input"/>
            <IconSearch/>
          </Input.IconInput>
          <ButtonGroup>
            <Button color="green" outline={true}>Search</Button>
            <Dropdown type="button" position="bottomRight">
              <Dropdown.Title>
                <Button color="green">
                  <FontAwesomeIcon icon={faArrowDown}/>
                </Button>
              </Dropdown.Title>
              <Menu>
                <Menu.List>
                  <Menu.Item value={1} text="Action 1"/>
                  <Menu.Item value={2} text="Action 2"/>
                  <Menu.Item value={3} text="Action 3"/>
                  <Menu.Item value={4} text="Action 4"/>
                </Menu.List>
              </Menu>
            </Dropdown>
          </ButtonGroup>
        </InputGroup>
      </div>
  
      <div className="doc doc-row">
        <InputGroup>
          <ButtonGroup>
            <Button color="green" outline={true}>Search</Button>
            <Dropdown type="button" position="bottomRight">
              <Dropdown.Title>
                <Button color="green">
                  <FontAwesomeIcon icon={faArrowDown}/>
                </Button>
              </Dropdown.Title>
              <Menu>
                <Menu.List>
                  <Menu.Item value={1} text="Action 1"/>
                  <Menu.Item value={2} text="Action 2"/>
                  <Menu.Item value={3} text="Action 3"/>
                  <Menu.Item value={4} text="Action 4"/>
                </Menu.List>
              </Menu>
            </Dropdown>
          </ButtonGroup>
          <Input.IconInput>
            <Input placeholder="This is an input"/>
            <IconSearch/>
          </Input.IconInput>
        </InputGroup>
      </div>
  
  
      <div className="doc doc-row">
        <InputGroup>
          <Input.IconInput>
            <Input placeholder="This is an input"/>
            <IconSearch/>
          </Input.IconInput>
          <ButtonGroup>
            <Button color="green" outline={true}>Search</Button>
            <Dropdown type="button" position="bottomRight">
              <Dropdown.Title>
                <Button color="green">
                  <FontAwesomeIcon icon={faArrowDown}/>
                </Button>
              </Dropdown.Title>
              <Menu>
                <Menu.List>
                  <Menu.Item value={1} text="Action 1"/>
                  <Menu.Item value={2} text="Action 2"/>
                  <Menu.Item value={3} text="Action 3"/>
                  <Menu.Item value={4} text="Action 4"/>
                </Menu.List>
              </Menu>
            </Dropdown>
          </ButtonGroup>
          <Input.IconInput>
            <Input placeholder="This is an input"/>
            <IconSearch/>
          </Input.IconInput>
        </InputGroup>
      </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};

export const G = () => {
  let comp = <>
    <div className="doc doc-row">
      <Input placeholder="Input" block/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block>
        <Input/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <ButtonGroup>
          <Button color="green" outline={true}>Search</Button>
          <Dropdown type="button" position="bottomRight">
            <Dropdown.Title>
              <Button color="green">
                <FontAwesomeIcon icon={faArrowDown}/>
              </Button>
            </Dropdown.Title>
            <Menu>
              <Menu.List>
                <Menu.Item value={1} text="Action 1"/>
                <Menu.Item value={2} text="Action 2"/>
                <Menu.Item value={3} text="Action 3"/>
                <Menu.Item value={4} text="Action 4"/>
              </Menu.List>
            </Menu>
          </Dropdown>
        </ButtonGroup>
        <Input.IconInput>
          <Input placeholder="This is an input"/>
          <IconSearch/>
        </Input.IconInput>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>
          $
        </InputGroup.Label>
        <Input placeholder="Money...."/>
        <Input placeholder="Money...."/>
      </InputGroup>
    </div>
  </>;

  let code = `
  import React, {Component} from "react";
  import {Menu} from "react-wui";
  
  export default class BlockquotaSample extends Component{
  
    render(){
      return  <>
       <div className="doc doc-row">
          <Input placeholder="Input" block/>
        </div>
        <div className="doc doc-row">
          <Input.IconInput block>
            <Input/>
            <IconSearch/>
          </Input.IconInput>
        </div>
        <div className="doc doc-row">
          <InputGroup block>
            <ButtonGroup>
              <Button color="green" outline={true}>Search</Button>
              <Dropdown type="button" position="bottomRight">
                <Dropdown.Title>
                  <Button color="green">
                    <FontAwesomeIcon icon={faArrowDown}/>
                  </Button>
                </Dropdown.Title>
                <Menu>
                  <Menu.List>
                    <Menu.Item value={1} text="Action 1"/>
                    <Menu.Item value={2} text="Action 2"/>
                    <Menu.Item value={3} text="Action 3"/>
                    <Menu.Item value={4} text="Action 4"/>
                  </Menu.List>
                </Menu>
              </Dropdown>
            </ButtonGroup>
            <Input.IconInput>
              <Input placeholder="This is an input"/>
              <IconSearch/>
            </Input.IconInput>
          </InputGroup>
        </div>
        <div className="doc doc-row">
          <InputGroup block>
            <InputGroup.Label>
              $
            </InputGroup.Label>
            <Input placeholder="Money...."/>
            <Input placeholder="Money...."/>
          </InputGroup>
        </div>
      </>;
    }
  }
  `;

  return <SamplePannel component={comp} code={code}/>;

};