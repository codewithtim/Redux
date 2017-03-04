import { connect } from 'react-redux';
import UserProfile from '../components/userProfile';

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
})

const UserProfileContainer = connect(
  mapStateToProps,
)(UserProfile)

export default UserProfileContainer;