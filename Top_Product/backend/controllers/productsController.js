const axios = require('axios');

const fetchProducts = async (req, res) => {
  const { categoryname } = req.params;
  const { n, minPrice, maxPrice, page, sortBy, orderBy } = req.query;

  try {
    const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products`, {
      params: {
        top: n,
        minPrice,
        maxPrice,
        page,
        sortBy,
        orderBy
      },
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NzQzOTQ0LCJpYXQiOjE3MjQ3NDM2NDQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJiMTM2OTg1LTM4NDMtNGRhNC1iZWYwLTEwZTk3NmEwOGU5MyIsInN1YiI6Im1vdnZhLnZlZGEyM0BnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjJiMTM2OTg1LTM4NDMtNGRhNC1iZWYwLTEwZTk3NmEwOGU5MyIsImNsaWVudFNlY3JldCI6IkN4S0t4RHRqenVVdVh5WFgiLCJvd25lck5hbWUiOiJNb3Z2YSBWZWRhIERhdGhhIFNhaSIsIm93bmVyRW1haWwiOiJtb3Z2YS52ZWRhMjNAZ21haWwuY29tIiwicm9sbE5vIjoiVlUyMUNTRU4wMTAwMDIxIn0.pgLqyZfcyT-qd2eNbuknOqfSk11mgVZ2GcWjUWT1AYk'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      res.status(error.response.status || 500).json({ message: error.response.data.message || 'Failed to fetch products' });
    } else {
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  }
};

module.exports = {
  fetchProducts
};
