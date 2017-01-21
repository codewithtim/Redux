
// Promise
// pending
// fulfilled 
// rejected
const initalState = {
  sendingRequest: false,
  requestRecieved: false,
  user: {
    name: '',
    email: '',
    gender: ''
  },
  status: '',
  statusClass: ''
}

// REDCUER
function userReducer(state=initalState, action) {
  const user = {
    name: '',
    email: '',
    gender: ''
  };

  switch (action.type) {
    case 'FETCH_USER_PENDING':
      return {...state, sendingRequest: true, status: 'Pending...', statusClass: 'pending'}
      break;
    case 'FETCH_USER_FULFILLED':
      user.name = `${action.payload.data.results[0].name.first} ${action.payload.data.results[0].name.last}`
      user.email = action.payload.data.results[0].email;
      user.gender = action.payload.data.results[0].gender;
      return {...state, sendingRequest: false, user, status: 'User Recieved', statusClass: 'success'}
    break;
    case 'FETCH_USER_REJECTED':
    return {...state, sendingRequest: false, status: `${action.payload.message}`, statusClass: 'error'}
    default:
      return state
  }
}

export default userReducer;