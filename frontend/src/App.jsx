// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import VolunteerLogin from "./pages/VolunteerLogin";
import RequestHelp from "./pages/RequestHelp";
import About from "./pages/About";
import Services from "./pages/Services";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import ContactUs from "./pages/ContactUs";
import Reports from "./pages/Reports";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Paths where navbar and footer should be hidden
  const hideNavbarFooterPaths = [
    "/login",
    "/volunteer-login",
    "/request-help",
    "/about",
    "/services",
    "/volunteer-dashboard" // Added dashboard to hide navbar/footer
  ];

  const hideNavbarFooter = hideNavbarFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-50 via-gray-100 to-red-50">
      
      {/* Show Navbar only if allowed */}
      {!hideNavbarFooter && <Navbar />}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/volunteer-login" element={<VolunteerLogin />} />

          {/* Main Pages */}
          <Route path="/request-help" element={<RequestHelp />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/reports" element={<Reports />} />

          {/* Dashboard */}
          <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Show Footer only if allowed */}
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
