import axios from "axios";

const axiosPut = axios.create({
    baseURL: 'https://react-redux-json-server.herokuapp.com',
    method:'put'

  });

  export default axiosPut;