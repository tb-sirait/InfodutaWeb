import React from 'react';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import MainContent from './component/MainContent';
import Footer from './component/Footer';
import './App.css'; // Import file CSS global jika ada

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;