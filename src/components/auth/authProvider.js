// AuthProvider.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState(sessionStorage.getItem('token'));
    const [message, setMessage] = useState('');
    
    const login = async (username, password, setIsLoggedIn) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, expiresInMins: 60 })
            });
    
            const data = await response.json();
            console.log(data)
            if (!data.id) {
                setMessage("Username or password is false.");
            } else {
                setUser({
                    username: data.user,
                    email: data.email,
                    firstname: data.firstName,
                    lastname: data.lastName,
                    gender: data.gender
                });
    
                setToken(data.token);
                sessionStorage.setItem('token', data.token);
                setIsLoggedIn(true);
                setMessage('');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setMessage('Failed to login. Please try again later.');
        }
    };
    

    const logout = (setIsLoggedIn) => {
        setUser(null);
        setToken(null);
        sessionStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    const refreshSession = async () => {
        try {
            const response = await fetch('https://dummyjson.com/auth/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ expiresInMins: 30 })
            });
            const data = await response.json();
            setToken(data.token);
            sessionStorage.setItem('token', data.token);
        } catch (error) {
            console.error('Session refresh failed:', error);
        }
    };

    useEffect(() => {
        if (token) {
            refreshSession();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, message }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
