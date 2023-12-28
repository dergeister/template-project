import axios from 'axios'

const coreApi = axios.create({
  baseURL: 'http://localhost:3000'
})

export default coreApi
