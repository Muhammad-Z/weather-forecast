import axios from 'axios';

const instance = axios.create({
 baseURL: 'https://api.openweathermap.org',
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    config.params = {...config.params, appid: "aec112ac0df781f177b949f3e8e1b7b4"};
 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;