import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useLocalStorage("globalState", {});
  const navigate = useNavigate();

  const value = useMemo(
    () => ({ globalState, setGlobalState }),
    [globalState]);
  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};

function useGlobalState() {
  return useContext(GlobalStateContext);
}
export { useGlobalState, GlobalStateProvider };
