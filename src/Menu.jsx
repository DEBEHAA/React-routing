import React from 'react';
import './Menu.css';

const Menu = () => {
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

      <section className="menu">
        <div className="container">
          <h1 style={{ fontFamily: 'Brush Script MT, cursive', fontSize: '100px', textAlign: 'center' }}>Our Menu</h1>
          <div className="dish-container">
            <div className="dish">
              <img src="https://i.pinimg.com/564x/c6/ff/25/c6ff2599bee9e66648168acfbcde638f.jpg" alt="Vanjaram fry"/>
              <h3>Vanjaram Fry</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/32/eb/39/32eb392a8ad35d9c9b8ca83950718551.jpg" alt="Onion Uthapam"/>
              <h3>Onion Uthapam</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/19/6d/e2/196de27a54a38c27de78904830b05f53.jpg" alt="Idiyapam"/>
              <h3>Idiyappam</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/44/8c/17/448c174f5922cadec8d9a750710031af.jpg" alt="Idiyapam"/>
              <h3>Idiyappam</h3>
            </div>
          </div>
          <div className="dish-container">
            <div className="dish">
              <img src="https://i.pinimg.com/564x/c8/d6/12/c8d6126704baa247be15577ca59cf353.jpg" alt="Tandoori Chicken"/>
              <h3>Tandoori Chicken</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/736x/3c/aa/cd/3caacda503346171f3ae16e5424ef437.jpg" alt="Grilled Prawn"/>
              <h3>Grilled Prawn</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/3e/ba/48/3eba486f40a4e60bb155402c2315089e.jpg" alt="Chicken Lollipop"/>
              <h3>Chicken Lollipop</h3>
            </div>
            <div className="dish">
              <img src="https://i.pinimg.com/564x/d7/c9/7d/d7c97d1190454c47cfde3c71353ce871.jpg" alt="Peri-Peri Chicken"/>
              <h3>Peri-Peri Chicken</h3>
            </div>
          </div>
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

export default Menu;
