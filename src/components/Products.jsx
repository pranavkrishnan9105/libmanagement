// src/components/Products.js
import React from 'react';


const Products = () => {
  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
