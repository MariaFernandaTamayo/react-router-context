
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Home() {
    const auth = useAuth();

    const handleLogout = () => {
        // Limpiar la autenticación al cerrar sesión
        auth.setIsAuthenticated(false);
        // Redirigir al usuario a la página de inicio de sesión (/login)
        return <Navigate to="/login" replace />;
    };

    return (
        <DefaultLayout>
            <h1>Bienvenido a Home</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </DefaultLayout>
    );
}