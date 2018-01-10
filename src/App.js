import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Core from './containers/Core';

const App = () => (
  <MuiThemeProvider>
    <Core></Core>
  </MuiThemeProvider>
);

export default App;
