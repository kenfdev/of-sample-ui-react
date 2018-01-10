import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FuncList from "../components/FuncList";
import FuncDetail from "../components/FuncDetail";

class Core extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFunction: null,
      // FIXME: mock data
      functions: [
        {
          name: 'Function A',
          replicas: 1,
          invocationCount: 1,
          image: 'image/function-a'
        }, {
          name: 'Function B',
          replicas: 1,
          invocationCount: 1,
          image: 'image/function-b'
        }
      ]
    }

    this.showFunction = this
      .showFunction
      .bind(this);

    this.onInvoke = this
      .onInvoke
      .bind(this);
  }
  showFunction(func) {
    this.setState({selectedFunction: func});
  }
  onInvoke(invocation) {
    console.log('invoking', invocation);
  }
  render() {
    const content = this.state.selectedFunction
      ? <FuncDetail func={this.state.selectedFunction} onInvoke={this.onInvoke}></FuncDetail>
      : <p>Select a Function</p>

    return (
      <div>
        <AppBar style={{position:'fixed',left:0,top:0}} title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        <Drawer
          open={true}
          containerStyle={{
          height: 'calc(100% - 64px)',
          top: 64
        }}>
          <FuncList functions={this.state.functions} selected={this.showFunction}></FuncList>
        </Drawer>
        <div style={{
          paddingLeft: 255
        }}>
          {content}
        </div>
      </div>

    );
  }
}

export default Core;