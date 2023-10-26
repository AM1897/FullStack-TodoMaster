import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import MyAPI from '../../api/MyAPI';

const Login = () => {
    const { setAuthState } = useContext(AuthContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async (email, password) => {
        try {
            const response = await MyAPI.post('/auth/login', {
                email: email,
                password: password,
            });
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
            return error;
        }
    }

    const loginUser = async (event) => {
        event.preventDefault();
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                // Set user info and isAuthenticated to true in AuthContext
                setAuthState({
                    userInfo: response.data.user,
                    isAuthenticated: true,
                });
                // Once user is logged in, redirect them to TodoPage
                history.push('/todopage');
            } else {
                // Handle error
                console.log('Error logging in');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    }

    return (
        <div>
            <form onSubmit={loginUser}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
}

export default Login;
