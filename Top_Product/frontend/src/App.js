import React, { useState } from 'react';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import useFetchProducts from './hooks/useFetchProducts';

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [categoryName, setCategoryName] = useState('Laptop');
  const [queryParams, setQueryParams] = useState({ n: 10 });

  const { products, loading, error } = useFetchProducts(categoryName, queryParams);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handlePageChange = (page) => {
    setQueryParams((prev) => ({ ...prev, page }));
  };

  const handleSortChange = (sortBy) => {
    setQueryParams((prev) => ({ ...prev, sortBy, orderBy: 'asc' }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div>
      <h1>Top Products</h1>
      {selectedProductId ? (
        <ProductDetail
          product={products.find(p => p.id === selectedProductId)}
        />
      ) : (
        <ProductsList
          products={products}
          onProductClick={handleProductClick}
          pagination={{
            currentPage: queryParams.page || 1,
            totalPages: Math.ceil(products.length / queryParams.n)
          }}
          onPageChange={handlePageChange}
          onSortChange={handleSortChange}
        />
      )}
    </div>
  );
};

export default App;
