import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../contexts/AuthContext.js'
import authService from '../../../utils/api/service/authService.js';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuthInfo } = useContext(AuthContext); // Ändra setAuthState till setAuthInfo

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

        try {
            const response = await authService.login({ username, password });
            console.log('Login response:', response);

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setAuthInfo({ token: response.data.token, username: username }); // Använd setAuthInfo här istället för setAuthState
                console.log("Navigating to /todopage...");
                navigate("/todopage");
            } else {
                console.error('Error:', response.data.error);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={handleLogin}>
                    Log In
                </button>
            </form>
            <Link to="/register">
                <button type="button">
                    Register
                </button>
            </Link>
        </div>
    );
};

export default Login;
