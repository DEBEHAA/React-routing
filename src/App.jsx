import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Reservations from './Reservations';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </Router>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
