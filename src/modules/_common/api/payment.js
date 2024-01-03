import axios from 'axios'

const paymentApi = axios.create({
  baseURL: 'http://localhost:3000'
})

export default paymentApi
