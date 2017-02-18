import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}

export default Users;