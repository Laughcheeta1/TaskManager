import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {  
    try {
      console.log("User to be registered: ");
      console.log(user);
      const res = await registerRequest(user);
      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      setErrors(() => [error.response.data]);
      console.log("the current error is: ")
      console.log(errors);
    }
  };

  const signin = async (user) => {
    try {
      console.log("User to be logged in: ");
      console.log(user);
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) { 
      console.log(error);
      setErrors(() => [error.response.data]);
      console.log("the current error is: ")
      console.log(errors);
    }
  };

  const logout = () => {
    Cookies.remove("token", {
      sameSite: "None",
      secure: "true",
    });
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors(() => []);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    // async function checkLogin() {
    //   const cookies = Cookies.get();

    //   if (!cookies.token) {
    //     setIsAuthenticated(false);
    //     setLoading(false);
    //     return;
    //   }

    //   try {
    //     const res = await verifyTokenRequest(cookies.token);

    //     if (!res.data) return setIsAuthenticated(false);

    //     setIsAuthenticated(true);
    //     setUser(() => res.data);
    //     setLoading(false);
    //   } catch (error) {
    //     setIsAuthenticated(false);
    //     setLoading(false);
    //   }
    // }
    // checkLogin();
    // TODO: perhaps just remove this to avoid dealing with cookies for now
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, user, isAuthenticated, errors, signin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
