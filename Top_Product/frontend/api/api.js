const API_URL = 'http://localhost:3001/api';

export const fetchProducts = async (categoryName, queryParams) => {
  const url = new URL(`${API_URL}/categories/${categoryName}/products`);
  Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchProductById = async (categoryName, productId) => {
  const response = await fetch(`${API_URL}/categories/${categoryName}/products/${productId}`);
  const data = await response.json();
  return data;
};
