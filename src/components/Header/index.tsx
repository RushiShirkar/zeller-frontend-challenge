import React from "react";
import { usePageTitle } from "../../context/PageTitleContext";

const Header: React.FC = () => {
  const { title } = usePageTitle();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm px-4 py-3 border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
    </header>
  );
};

export default Header;
