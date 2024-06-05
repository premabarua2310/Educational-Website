import React from 'react';
import './App.css';
import Header from './components/common/heading/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={< Home />} />
          <Route path='/about' exact element={< About />} />
          <Route path='/courses' exact element={< CourseHome />} />
          <Route path='/team' exact element={< Team />} />
          <Route path='/pricing' exact element={< Price />} />
          <Route path='/journal' exact element={< Blog />} />
          <Route path='/contact' exact element={< Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
