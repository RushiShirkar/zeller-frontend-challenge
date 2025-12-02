import { Outlet } from "react-router";
import Header from "../Header";
import { PageTitleProvider } from "../../context/PageTitleContext";

const Layout: React.FC = () => {
  return (
    <PageTitleProvider>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-[400px] min-h-screen shadow-2xl bg-white flex flex-col">
          <Header />
          <main className="p-5 flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </PageTitleProvider>
  );
};

export default Layout;
