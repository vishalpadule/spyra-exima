import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';

function App() {
  return (
    // BrowserRouter should wrap everything
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />}/>
          <Route path="/Products" element={<Products />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
