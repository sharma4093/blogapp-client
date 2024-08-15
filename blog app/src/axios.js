import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: 'http://localhost:4000/api/v1', 
  baseURL: 'https://server-blog-six.vercel.app/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
