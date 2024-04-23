import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigacija from "./components/Navigacija.tsx";
import Footer from "./components/Footer.tsx";
import NotFound from "./pages/NotFound.tsx";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col h-dvh">
    <div className="h-1/6">
      <Navigacija />
    </div>
    <div className="h-4/6">{children}</div>
    <div className="h-1/6">
      <Footer />
    </div>
  </div>
);

import Pocetna from "./pages/Pocetna.tsx";
import Radionice from "./pages/Radionice.tsx";
import Predavaci from "./pages/Predavaci.tsx";
import Administracija from "./pages/Administracija.tsx";
import { ReactNode } from "react";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Pocetna />
        </Layout>
      ),
      errorElement: (
        <Layout>
          <NotFound />
        </Layout>
      ),
    },
    {
      path: "/radionice",
      element: (
        <Layout>
          <Radionice />
        </Layout>
      ),
    },
    {
      path: "/predavaci",
      element: (
        <Layout>
          <Predavaci />
        </Layout>
      ),
    },
    {
      path: "/administracija",
      element: (
        <Layout>
          <Administracija />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
