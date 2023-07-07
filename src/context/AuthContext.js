import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState([]);

  const login = (userData) => {
    // Aquí puedes implementar la lógica para iniciar sesión
    setAuth(true);
    setUserData(userData);
  };

  const logout = () => {
    // Aquí puedes implementar la lógica para cerrar sesión
    setAuth(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ auth, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
