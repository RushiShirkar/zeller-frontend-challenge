import { createContext, useContext, useState, ReactNode } from "react";
import { PageTitleContextProps } from "../types";

const PageTitleContext = createContext<PageTitleContextProps | undefined>(
  undefined
);

export const PageTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState("Customers");

  return (
    <PageTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </PageTitleContext.Provider>
  );
};

export const usePageTitle = () => {
  const context = useContext(PageTitleContext);
  if (!context) throw new Error("usePageTitle must be used in a provider");
  return context;
};
