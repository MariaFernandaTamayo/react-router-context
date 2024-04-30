import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
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

    const authContextValue: AuthContextType = {
        isAuthenticated,
        setIsAuthenticated,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
