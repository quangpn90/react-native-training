// import {create} from 'apisauce'
import axios from 'axios'

// import Config from 'react-native-config'

const http = axios.create({
  baseURL: 'http://localhost:3000',
  //   baseURL: Config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 10000,
})

export default http
