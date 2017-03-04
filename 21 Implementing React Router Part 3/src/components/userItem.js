import React from 'react';
import { Link } from 'react-router';

// /user:orangeleopard347
const UserItem = (props) => (
  <Link
    className='box'
    onClick={props.onClick}
    to={`/user:${props.user.login.username}`}
  >
    <img src={props.user.picture.thumbnail} />
    <span>{props.user.login.username}</span>
  </Link>
)

UserItem.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default UserItem