import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://association-server.onrender.com/'   
  });


  export default axiosInstance;