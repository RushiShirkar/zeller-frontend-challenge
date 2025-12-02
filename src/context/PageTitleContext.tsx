import { createContext, useContext, useState, ReactNode } from "react";

interface PageTitleContextProps {
  title: string;
  setTitle: (title: string) => void;
}

const PageTitleContext = createContext<PageTitleContextProps | undefined>(
  undefined
);

export const PageTitleProvider = ({
  children,
  initialTitle = "Customers"
}: {
  children: ReactNode;
  initialTitle?: string;
}) => {
  const [title, setTitle] = useState(initialTitle);

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
