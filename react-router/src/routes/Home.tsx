// Home.tsx
import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Home() {
    const auth = useAuth();

    const handleLogout = () => {
        // Limpiar la autenticación al cerrar sesión
        auth.setIsAuthenticated(false);
    };

    return (
        <DefaultLayout>
            <h1>Home</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </DefaultLayout>
    );
}