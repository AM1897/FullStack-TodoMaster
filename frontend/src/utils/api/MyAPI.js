import Axios from 'axios'

const MyAPI = Axios.create({
    baseURL: 'http://localhost:3000'
})

export default MyAPI
