import axios from 'axios'

// Api to point to backend server
export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
