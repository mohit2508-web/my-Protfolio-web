import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <CustomCursor/>
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="flex-grow pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
