// AuthProvider.tsx
import { createContext, useContext, useState, useEffect } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value: boolean) => {}, // Placeholder function
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Al cargar la aplicación, verifica si hay una sesión activa en localStorage
    useEffect(() => {
        const storedAuth = localStorage.getItem("auth");
        if (storedAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    // Al cambiar el estado de autenticación, actualiza localStorage
    useEffect(() => {
        localStorage.setItem("auth", isAuthenticated.toString());
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);