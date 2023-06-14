import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext.js';
import AuthService from '../../../utils/api/service/authService';

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const userCredentials = {
            username: username,
            password: password,
        };
        try {
            await AuthService.register(userCredentials); // Här har vi ändrat från `registerUser` till `register`
            navigate('/'); // Navigera till inloggningssidan
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Registrera dig</h1>
            <input type="text" placeholder="Användarnamn" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Lösenord" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Registrera</button>
        </div>
    );
}

export default RegisterPage;
