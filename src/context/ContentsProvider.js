import { createContext } from "react";

export const ContentsContext = createContext(null);

const ContentsProvider = ({ children }) => {
  return (
    <ContentsContext.Provider value={{ name: "luoshichao" }}>
      {children}
    </ContentsContext.Provider>
  );
};

export default ContentsProvider;
