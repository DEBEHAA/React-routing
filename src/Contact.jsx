import React from 'react';
import './Contact.css';

const Contact = () => {
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

      <section className="contact-info">
        <div className="container">
          <h2>Contact Us</h2>
          <p><strong>Phone: </strong>+91 63815 53551</p>
          <p style={{ marginLeft: '55px' }}>+91 72004 73666</p>
          <p><strong>Email: </strong> info@deliciousbites.com</p>
        </div>
        <div className="container">
          <h2 style={{ marginTop: '50px' }}>Home Delivery</h2>
          <p>We offer free delivery for orders above 350.</p>
          <p>Special Offers: Gift coupons for bills above 800</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>Follow us on social media for exclusive discounts!</p>
          <p>&copy; 2024 Delicious Bites Restaurant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
