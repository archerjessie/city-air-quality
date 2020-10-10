/* eslint-disable react/destructuring-assignment */
import React from 'react';

const withState = (name, setName, initialState) => (Component) => {
  const factory = React.createFactory(Component);
  class WithState extends React.Component {
    constructor(props) {
      super(props);
      this.state = { [name]: initialState };
    }

      set = (value) => (this.state[name] !== value
        ? (this.setState({ [name]: value }), true)
        : false)

      render = () => factory({ ...this.props, ...this.state, [setName]: this.set })
  }
  return WithState;
};

export default withState;
