import React, { Component } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import SearchBox from './components/SearchBox';
import './App.css';

import array from './components/data';

class App extends Component {
  constructor() {
    super();

    this.state = { row: 5, column: 4 };
  }

  boxes = () => {
    let i = null;
    const { row, column } = this.state;
    const boxes = [];

    for (i = 0; i < (row * column); i += 1) {
      boxes.push(<SearchBox row={row} key={i} data={array} />);
    }

    return boxes;
  }

  render() {
    const rowStyle = {
      height: '100vh',
    };

    return (
      <Grid fluid>
        <Row style={rowStyle}>
          {this.boxes()}
        </Row>
      </Grid>
    );
  }
}

export default App;
