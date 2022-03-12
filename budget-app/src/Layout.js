import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <main className="container">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
