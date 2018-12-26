import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import SearchBox from './components/SearchBox';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row><SearchBox /></Row>
      </Grid>
    );
  }
}

export default App;
