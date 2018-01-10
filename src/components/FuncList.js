import React from 'react';
import {List, ListItem} from 'material-ui/List';

const FuncList = (props) => (
  <List>
    {props
      .functions
      .map((f, i) => (<ListItem key={i} primaryText={f.name} onClick={() => props.selected(f)} />))}
  </List>
);

export default FuncList;