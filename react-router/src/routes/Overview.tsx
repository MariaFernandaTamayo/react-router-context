// Overview.tsx
import React from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Overview() {
    const auth = useAuth();

    const handleLogout = () => {
        // Limpiar la autenticación al cerrar sesión
        auth.setIsAuthenticated(false);
    };

    return (
        <DefaultLayout>
            <h1>Overview</h1>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </DefaultLayout>
    );
}