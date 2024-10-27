import React from 'react';
import './Home.css';

const Home = () => {
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

      <section className="hero">
        <div className="container">
          <h2>Welcome to Delicious Bites Restaurant</h2>
          <p>Indulge in the finest culinary experience with our delicious dishes prepared by top chefs.</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Special Dishes</h2>
          <div className="dish-container">
            <div className="dish">
              <img src="https://i1.wp.com/photos.smugmug.com/Cold-Kimchi-Noodles/i-xWbMzjH/0/34acca91/M/Cold%20Kimchi%20Noodles%209-M.jpg?w=1170&ssl=1" alt="Kimchi Noodles"/>
              <h3>Kimchi Noodles</h3>
            </div>
            <div className="dish">
              <img src="https://t3.ftcdn.net/jpg/06/01/41/66/360_F_601416673_Tn9dqtXuujNiavuJnNNspgcDezsStYpD.jpg" alt="Butter Chicken"/>
              <h3>Butter Chicken</h3>
            </div>
            <div className="dish">
              <img src="https://as2.ftcdn.net/v2/jpg/07/20/50/99/1000_F_720509931_CRMjo538TlnLJXaFmDbvJ9XXM3YBhLdP.jpg" alt="Japanese Raman"/>
              <h3>Japanese Raman</h3>
            </div>
            <div className="dish">
              <img src="https://as2.ftcdn.net/v2/jpg/07/10/65/31/1000_F_710653151_5e5FIszFVqgdikavRmO1uyvTMeusxnxG.jpg" alt="Prawn Biriyani"/>
              <h3>Prawn Biriyani</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="reservation">
        <div className="container">
          <h2>Make a Reservation</h2>
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

export default Home;
