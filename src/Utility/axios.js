 import axios from "axios";

 const axiosInstance = axios.create({
    baseURL: 'https://react-redux-json-server.herokuapp.com',
    

  });

 

  export default axiosInstance;