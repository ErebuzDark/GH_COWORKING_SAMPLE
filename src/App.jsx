import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

import Homepage from './Pages/Homepage/Homepage';
import OffersPage from './Pages/Offerspage/OffersPage';
import FeaturesPage from './Pages/Featurespage/FeaturesPage';
import ContactPage from './Pages/Contactpage/ContactPage';

import Layout from './Components/Layout';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Homepage /></Layout>} />
          <Route path="/offers" element={<Layout><OffersPage /></Layout>} />
          <Route path="/features" element={<Layout><FeaturesPage /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        </Routes>
      </Router>
  );
};

export default App;