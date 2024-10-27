import React from 'react';
import './Reservations.css';

const Reservations = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1 style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '50px' }}>Delicious Bites Restaurant</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="reservation">
        <div className="container">
          <h2 style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '100px',color:'white', textAlign: 'center' }}>Make a Reservation</h2>
          <form>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="datetime-local" placeholder="Date and Time"/>
            <textarea placeholder="Special Requests"></textarea>
            <button type="submit" className="btn">Make Reservation</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Delicious Bites Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Reservations;
