import { Outlet } from "react-router";
import Header from "../Header";
import { PageTitleProvider } from "../../context/PageTitleContext";

const Layout: React.FC = () => {
  return (
    <PageTitleProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-[400px] min-h-screen shadow-2xl bg-white">
          <Header />
          <div className="p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </PageTitleProvider>
  );
};

export default Layout;
