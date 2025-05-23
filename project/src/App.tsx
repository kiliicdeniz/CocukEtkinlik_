import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ActivityPage from './pages/ActivityPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-amber-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activity/:id" element={<ActivityPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;