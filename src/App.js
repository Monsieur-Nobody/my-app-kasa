import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/ChildsComponents/Header'
import HomePage from './components/PageComponents/HomePage'
import AboutPage from './components/PageComponents/AboutPage'
import LocationPage from './components/PageComponents/LocationPage'
import NotFoundPage from './components/PageComponents/NotFoundPage'
import Footer from './components/ChildsComponents/Footer'

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