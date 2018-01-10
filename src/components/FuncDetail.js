import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import {Card, CardHeader} from 'material-ui/Card';

class FuncDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invocation: {}
    }

    this.handleInvoke = this
      .handleInvoke
      .bind(this);

    this.handleContentTypeChange = this
      .handleContentTypeChange
      .bind(this);

    this.handleRequestChange = this
      .handleRequestChange
      .bind(this);
  }

  handleInvoke() {
    this.props.onInvoke(this.state.invocation);
  }

  handleRequestChange(e, v) {
    const invocation = Object.assign({}, this.state.invocation, {request: v});
    this.setState({invocation});
  }

  handleContentTypeChange(e, v) {
    const invocation = Object.assign({}, this.state.invocation, {contentType: v});
    this.setState({invocation});
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader title={this.props.func.name}/>
          <div>
            <TextField
              disabled={true}
              value={this.props.func.replicas}
              floatingLabelText="Replicas"/>
            <TextField
              disabled={true}
              value={this.props.func.invocationCount}
              floatingLabelText="Invocation Count"/>
          </div>
          <div>
            <TextField
              disabled={true}
              value={this.props.func.image}
              floatingLabelText="Image"/>
          </div>
        </Card>
        <Card>
          <RaisedButton label="Invoke" onClick={this.handleInvoke}></RaisedButton>
          <RadioButtonGroup
            name="shipSpeed"
            defaultSelected="text"
            valueSelected={this.state.invocation.contentType}
            onChange={this.handleContentTypeChange}>
            <RadioButton value="text" label="Text"/>
            <RadioButton value="json" label="JSON"/>
            <RadioButton value="binary" label="Download"/>
          </RadioButtonGroup>
          <div>
            <TextField
              rows={4}
              value={this.state.invocation.request}
              onChange={this.handleRequestChange}
              multiLine={true}
              floatingLabelText="Request Body"/>
          </div>
          <div>
            <TextField
              disabled={true}
              value={this.props.invocationStatus}
              floatingLabelText="Response Status"/>
            <TextField
              disabled={true}
              value={this.props.roundTripDuration}
              floatingLabelText="Round-trip (s)"/>
          </div>
          <div>
            <TextField
              rows={10}
              value={this.props.invocationResponse}
              multiLine={true}
              floatingLabelText="Response Body"/>
          </div>
        </Card>
      </div>
    );
  }
}
export default FuncDetail;