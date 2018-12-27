import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import Typing from '../Typing';
import './styles.css';

const colors = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

class SeachBox extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentDidMount() {
    this.random();
  }

  randomColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  }

  random = () => {
    const { data } = this.props;
    const text = data[Math.floor(Math.random() * data.length)];

    this.setState({ text });
  }

  render() {
    const { row } = this.props;
    const { text } = this.state;

    const colStyle = {
      height: `calc(100vh / ${row})`,
      backgroundColor: this.randomColor(),
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
