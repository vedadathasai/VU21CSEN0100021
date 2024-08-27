import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductDetail;
