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
      return {
        text: props.text,
        typing: true,
      };
    }
    return null;
  }


  done = () => {
    this.setState({ typing: false }, () => setTimeout(() => this.props.onTypingDone(), 500));
  }

  render() {
    const { typing, text } = this.state;

    if (!typing) {
      return null;
    }

    return (
      <Typist
        avgTypingDelay={200}
        onTypingDone={this.done}
        cursor={{ show: false }}
      >
        {`${text} ${text} ${text}`}
      </Typist>
    );
  }
}

Typing.propTypes = {
  text: PropTypes.string.isRequired,
  onTypingDone: PropTypes.func.isRequired,
};

export default Typing;
