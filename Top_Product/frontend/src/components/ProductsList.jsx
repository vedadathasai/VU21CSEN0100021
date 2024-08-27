import React from 'react';
import ProductCard from './ProductDetail';
import Pagination from './Pagination';
import SortingOptions from './SortingOptions';

const ProductsList = ({ products, onProductClick, pagination, onPageChange, onSortChange }) => {
  return (
    <div>
      <SortingOptions onSortChange={onSortChange} />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => onProductClick(product.id)} />
      ))}
      <Pagination pagination={pagination} onPageChange={onPageChange} />
    </div>
  );
};

export default ProductsList;
