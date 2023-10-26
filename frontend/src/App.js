import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import TodoPage from './components/todoPage/TodoPage.jsx';
import AuthProvider from './context/AuthContext.js';

function App() {
    return (
        <AuthProvider>
            <Router>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/todopage" element={<TodoPage />} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}

export default App;
