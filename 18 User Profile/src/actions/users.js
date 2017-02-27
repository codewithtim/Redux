import axios from 'axios';

export function fetchUsers() {
  return {
    type: 'FETCH_USER',
    payload: axios.get('https://randomuser.me/api/?results=10')
  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
  }
}