const express = require('express');
const cors = require('cors');
const app = express();
const productsRoute = require('./routes/productsRoute');

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/api', productsRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
