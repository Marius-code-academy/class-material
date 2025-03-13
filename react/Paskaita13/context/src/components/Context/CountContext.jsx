import { createContext, useContext, useState } from "react";

const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{ count, setCount }}>{children}</CountContext.Provider>;
};

export const useCountContext = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("To use count context, wrap component in CountProvider");
  }
  return context;
};

export default CountProvider;
