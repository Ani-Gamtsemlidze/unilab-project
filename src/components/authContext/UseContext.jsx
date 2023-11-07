import { createContext, useContext, useState } from "react";

export const IsAuthTheme = createContext();

function AuthContext(props) {
  const [isInfoEntered, setIsInfoEntered] = useState(false);

  return (
    <IsAuthTheme.Provider value={{ isInfoEntered, setIsInfoEntered }}>
      {props.children}
    </IsAuthTheme.Provider>
  );
}

function useAuth() {
  const context = useContext(IsAuthTheme);
  if (context === undefined) throw new Error("error");
  return context;
}

export { AuthContext, useAuth };
