// Overview.tsx
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Overview() {
    const auth = useAuth();

    const handleLogout = () => {
        // Limpiar la autenticación al cerrar sesión
        auth.setIsAuthenticated(false);
        // Redirigir al usuario a la página de inicio de sesión (/login)
        return <Navigate to="/login" replace />;
    };

    return (
        <DefaultLayout>
            <h1>Bienvenido a Overview</h1>
            <h2>Información del Sistema</h2>
            <p>Nombre del Sistema: Sistema de Gestión Login</p>
            <p>Versión del Sistema: 1.0.0</p>
            <p>Descripción: Este es un sistema de gestión para autenticar el usuario admin@admin / admin </p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </DefaultLayout>
    );
}