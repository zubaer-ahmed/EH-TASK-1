import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    // navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = async () => {
    await fetch(import.meta.env.VITE_BASE_URL + "/api/users/logout", {
      method: "GET",
      credentials: "include",
    });
    setUser(null);
    // navigate("/", { replace: true });
  };
  const fetchUser = async () => {
    let res, fetchedUser;
    try {
      res = await fetch(import.meta.env.VITE_BASE_URL + "/api/users/getSelf", {
        method: "GET",
        credentials: "include",
      });
      fetchedUser = await res.json();
      setUser(fetchedUser);
    } catch (e) {
      console.log(e);
      return [e, res, fetchedUser];
    }
  };

  const value = useMemo(
    () => ({
      user,
      setUser,
      fetchUser,
      login,
      logout,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return useContext(AuthContext);
}
export { useAuth, AuthProvider };
