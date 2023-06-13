// AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    // Lägg till fler data om det behövs
  });

  const setAuthInfo = ({ token, username }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    // Lägg till fler data om det behövs
    setAuthState({
      token: token,
      username: username,
      // Lägg till fler data om det behövs
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Ta bort fler data om det behövs
    setAuthState({});
  };

  return (
      <AuthContext.Provider value={{ authState, setAuthInfo, logout }}>
        {props.children}
      </AuthContext.Provider>
  );
};
