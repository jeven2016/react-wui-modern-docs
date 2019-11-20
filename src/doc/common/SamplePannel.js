import React, {Component} from 'react';
import {Card, Tooltip} from "react-wui-modern";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons";
import CodeTemplate from "./CodeTemplate";

export default class SamplePannel extends Component {
  constructor(args) {
    super(args);

    this.state = {
      showCode: false
    };

    this.show = this.show.bind(this);
  }

  show() {
    let originState = this.state.showCode;
    this.setState({
      showCode: !originState
    })
  }

  render() {
    const {component, code} = this.props;
    let displayOption = this.state.showCode ? "" : "none";

    return <Card block={true} extraClassName="doc-sample-panel">
      <Card.Header>
        <div className="doc-title">
          <div className="doc-title-item" onClick={this.show}>
            <div>
              <Tooltip body="Code">
                <span>
                <FontAwesomeIcon icon={faCode}/>
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card.Header>
      <Card.Row>
        {component}
      </Card.Row>
      <Card.Row>
        <div style={{display: displayOption}}>
          <CodeTemplate code={code}/>
        </div>
      </Card.Row>
    </Card>;
  }

}