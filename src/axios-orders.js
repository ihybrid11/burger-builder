import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-7b595.firebaseio.com/'
});

export default instance;