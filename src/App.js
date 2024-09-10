import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LocationPage from './pages/LocationPage'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;