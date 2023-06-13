import http from '../MyAPI';

http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
const register = (data) => {
    return http.post('/auth/register', data);
};

const login = (data) => {
    return http.post('/auth/login', data);
};

const authService = {
    register,
    login,
};

export default authService;
