
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Gallery from "./pages/Gallery";
import Markets from "./pages/Markets";
import Contact from "./pages/Contact";
import UserManagement from "./pages/UserManagement";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BackgroundMusic from "./components/BackgroundMusic";

function App() {
  return (
    <BrowserRouter>
      <BackgroundMusic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-management" element={<UserManagement />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
