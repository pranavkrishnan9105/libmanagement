import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import ledBulbImage from '../assets/img.jpg'
import smartSwitchImage from '../assets/img.jpg';
import extensionCordImage from '../assets/img.jpg';

const Home = () => {
  const products = [
    { id: 1, name: 'LED Light Bulb', price: '$5.99', image:ledBulbImage },
    { id: 2, name: 'Smart Switch', price: '$19.99', image: smartSwitchImage },
    { id: 3, name: 'Extension Cord', price: '$12.49', image: extensionCordImage},
    // Add more products as needed
  ];

  return (
    <div>
      <header>
        <h1>Electrical Components Store</h1>
      
      </header>

      <main>
        <section className="banner">
          <h2>Power Up Your Home!</h2>
          <p>Find the best electrical components for your needs.</p>
        </section>

        <section className="product-categories">
          <h3>Shop by Category</h3>
          <ul>
            <li><Link to="/products/wiring">Wiring</Link></li>
            <li><Link to="/products/switches">Switches</Link></li>
            <li><Link to="/products/fixtures">Fixtures</Link></li>
            <li><Link to="/products/tools">Tools</Link></li>
          </ul>
        </section>

        <section className="featured-products">
          <h3>Featured Products</h3>
          <div className="product-list">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <h3>Check out our special offers!</h3>
          <Link to="/offers">View Offers</Link>
        </section>
      </main>

      <footer>
        <p>Contact us: info@electricalstore.com</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
};

export default Home;
