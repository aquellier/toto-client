import axios from 'axios';

// Create an instance of axios client with some default properties


export default axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 30000,
});
