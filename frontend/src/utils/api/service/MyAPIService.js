import http from '../MyAPI'

const Alive = () => {
    return http.get('/')
}
export default {
    Alive
}