import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pocetna from "./pages/Pocetna.tsx";
import Radionice from "./pages/Radionice.tsx";
import Predavaci from "./pages/Predavaci.tsx";
import Administracija from "./pages/Administracija.tsx";
import Navigacija from "./components/Navigacija.tsx";
import Footer from "./components/Footer.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Pocetna />,
      errorElement: <NotFound />,
    },
    {
      path: "/radionice",
      element: <Radionice />,
    },
    {
      path: "/predavaci",
      element: <Predavaci />,
    },
    {
      path: "/",
      element: <Administracija />,
    },
  ]);
  return (
    <div className="flex flex-col h-dvh">
      <div className="h-1/6">
        <Navigacija />
      </div>
      <div className="h-4/6">
        <RouterProvider router={router} />
      </div>

      <div className="h-1/6">
        <Footer />
      </div>
    </div>
  );
};

export default App;
