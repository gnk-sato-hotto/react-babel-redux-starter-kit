import React from 'react';

const styles = {
  style: {
    padding: 30,
  }
}

export default class EditUser extends React.Component {

  /* Mounting */
  constructor() {
    super();
  }
  componentWillMount() {
    this.props.fetchUser();
  }
  componentDidMount() {
  }

  /* Updating */
  componentWillReceiveProps() {
  }
  componentWillUpdate() {
  }
  componentDidUpdate() {
  }

  /* Unmouting */
  componentWillUnmount() {
  }

  render() {
    return (
      <div style={styles.style}>
        Hello !
        <br />
        User info ↓
        <br />
        User ID:   {this.props.user.getId()}
        <br />
        User name: {this.props.user.getName()}
      </div>
    );
  }
}
