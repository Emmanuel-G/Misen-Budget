import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Budget from "./pages/Budget";
import Home from "./pages/Home";
import NoBudget from "./pages/NoBudget";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Budget/:id" element={<Budget />} />
        <Route path="/Budget" element={<NoBudget />} />
      </Route>
    </Routes>
  );
}

export default App;
