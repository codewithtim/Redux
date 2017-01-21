import axios from 'axios';

export default function fetchUsers() {
    return {
        type: 'FETCH_USER',
        payload: axios.get("https://randomuser.me/api/jkgvkv")
    }
}
