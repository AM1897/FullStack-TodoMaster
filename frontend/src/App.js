import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login.jsx";
import Register from "./components/Auth/Register/Register.jsx";
import TodoPage from './components/Todo/TodoPage/TodoPage.jsx';
import { AuthProvider } from './contexts/AuthContext.js';

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
