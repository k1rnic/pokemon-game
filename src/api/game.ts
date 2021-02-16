import axios from 'axios';

export default axios.create({
  baseURL: 'https://reactmarathon-api.netlify.app/api',
});
