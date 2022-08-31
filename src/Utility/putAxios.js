import axios from "axios";

const axiosPut = axios.create({
    baseURL: 'http://localhost:9000',
    method:'put'

  });

  export default axiosPut;