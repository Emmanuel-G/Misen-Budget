import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
