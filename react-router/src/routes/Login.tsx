// Login.tsx
import { useAuth } from "../auth/AuthProvider";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    const handleLogin = () => {
        // Verificar las credenciales del usuario administrador
        if (email === "admin@admin.com" && password === "admin") {
            auth.setIsAuthenticated(true); // Establecer autenticación
        }
    };

    if (auth.isAuthenticated) {
        return <Navigate to="/home" />; // Redirigir si ya está autenticado
    }

    return (
        <form>
            <h1>Login</h1>
            <label>Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </form>
    );
}