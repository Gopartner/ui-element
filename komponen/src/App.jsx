import { Routes, Route } from "react-router-dom";
import AppLayout from "@l/AppLayout";
import Home from "@p/HomePage";
import Contact from "@p/ContactUs";
import About from "@p/About";
import Login from "@a/Login";
import Register from "@a/Register";
import Profile from "@p/Profile";
import DataDisplay from "@c/DataDisplay";
import ImageProcessing from "@c/ImageProcessing";
import NotFound from "@p/NotFound";

function App() {
  return (
    <Routes>
      {/* Semua halaman ini menggunakan AppLayout */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="data-display" element={<DataDisplay />} />
        <Route path="image-processing" element={<ImageProcessing />} />
      </Route>

      {/* Halaman tanpa AppLayout (opsional) */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
