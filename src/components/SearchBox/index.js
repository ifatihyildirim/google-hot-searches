import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Typing from '../Typing';
import './styles.css';

const randomColor = require('randomcolor');

class SeachBox extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentDidMount() {
    this.random();
  }

  random = () => {
    const { data } = this.props;
    const text = data[Math.floor(Math.random() * data.length)];

    this.setState({ text });
  }

  render() {
    const { row } = this.props;
    const { text } = this.state;
    const color = randomColor({ luminosity: 'light' }); // a hex code for an attractive color

    const colStyle = {
      height: `calc(100vh / ${row})`,
      backgroundColor: color,
    };

    if (text === null) {
      return null;
    }

    return (
      <Col style={colStyle} className="typewriter" md={3}>
        <Typing
          onTypingDone={() => {
            this.random();
          }}
          text={text}
        />
      </Col>
    );
  }
}

SeachBox.propTypes = {
  data: PropTypes.array.isRequired,
  row: PropTypes.number.isRequired,
};

export default SeachBox;
