import React, { PureComponent } from 'react';
import Typist from 'react-typist'; // import the script
import PropTypes from 'prop-types';

class Typing extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      typing: false,
    };
  }

  componentDidMount() {
    this.setState({
      text: this.props.text,
      typing: true,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.text !== state.text) {
      console.log(props.text);

      return {
        text: props.text,
        typing: true,
      };
    }
    return null;
  }


  done = () => {
    this.props.onTypingDone();
    this.setState({ typing: false });
  }

  render() {
    const { typing, text } = this.state;

    if (!typing) {
      return null;
    }

    return <Typist avgTypingDelay={200} onTypingDone={this.done}>{text}</Typist>;
  }
}

Typing.propTypes = {
  text: PropTypes.string.isRequired,
  onTypingDone: PropTypes.func.isRequired,
};

export default Typing;
