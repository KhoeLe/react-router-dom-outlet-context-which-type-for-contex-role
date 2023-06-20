import { createContext, useState, useContext, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: string;
  login: () => void;
  // login: () => Promise<void>;
  logout: () => void;

}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  login: async () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout: () => {},
  userRole: '',
});

export const useAuth = (): AuthContextType => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState('');




  const login = () => {
    // Perform login logic and set the authenticated state and user role
    setIsAuthenticated(true);
    setUserRole('admin'); // Replace with your actual logic to retrieve the user role
  };

  const logout = () => {
    // Perform logout logic and reset the authenticated state and user role
    setIsAuthenticated(false);
    setUserRole('');
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, logout, login,userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
