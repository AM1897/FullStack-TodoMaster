import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import authService from '../../../utils/api/service/authService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = await authService.register({ username, password });

    if (data.message === 'User created successfully') {
      navigate("/"); // Redirect the user to the login page after successful registration
    } else {
      console.error('Error:', data.error);
      // Display an error message to the user
    }
  };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
