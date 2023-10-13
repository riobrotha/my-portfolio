import { createContext, useState, useContext } from "react";

const NotFoundContext = createContext(null);
const NotFoundProvider = ({ children }) => {
  const initialState = false;

  const [isNotFound, setIsNotFound] = useState(initialState);

  return (
    <NotFoundContext.Provider value={{ isNotFound, setIsNotFound }}>
      {children}
    </NotFoundContext.Provider>
  );
};

export default NotFoundProvider;

export function useNotFound() {
  return useContext(NotFoundContext);
}
