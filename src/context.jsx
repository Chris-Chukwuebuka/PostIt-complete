import { createContext, useContext } from "react";
const AppContext = createContext();
export const useGlobalContext = () => useContext(AppContext);
const baseURL = "https://ebukapostitapi.onrender.com/api/v1";

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ baseURL }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
