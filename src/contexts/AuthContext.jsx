import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";


const AuthContext = createContext(null);

export const RequireAuth = ({ children }) => {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return (
    <Navigate
      to="/auth"
      state={{ from: location }}
    />
  )
  return children;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const isAuthenticated = useMemo(() => user !== null, [user])

  const handleSuccess = (res) => {
    const { profileObj: currentUser } = res
    console.log
    setUser(currentUser)
  }
  const handleLogout = (res) => {
    console.log(res)
    setUser(null)
  }

  useEffect(() => {
    
  }, [user])
  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      setUser,
      handleSuccess,
      handleLogout
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)