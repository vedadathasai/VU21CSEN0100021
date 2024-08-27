// frontend/src/hooks/useFetchProducts.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchProducts = (categoryName, queryParams) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/categories/${categoryName}/products`, {
          params: queryParams,
          headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzM3MzM1LCJpYXQiOjE3MjQ3MzcwMzUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJiMTM2OTg1LTM4NDMtNGRhNC1iZWYwLTEwZTk3NmEwOGU5MyIsInN1YiI6Im1vdnZhLnZlZGEyM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjJiMTM2OTg1LTM4NDMtNGRhNC1iZWYwLTEwZTk3NmEwOGU5MyIsImNsaWVudFNlY3JldCI6IkN4S0t4RHRqenVVdVh5WFgiLCJvd25lck5hbWUiOiJNb3Z2YSBWZWRhIERhdGhhIFNhaSIsIm93bmVyRW1haWwiOiJtb3Z2YS52ZWRhMjNAZ21haWwuY29tIiwicm9sbE5vIjoiVlUyMUNTRU4wMTAwMDIxIn0.gyy7zqXebTxAI6ghN8pBixVyV-vKWyL6qQGu2LBKl7Y'  // Replace YOUR_API_TOKEN with the actual token
          }
        });
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products in frontend:', err.message);
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName, queryParams]);

  return { products, loading, error };
};

export default useFetchProducts;
