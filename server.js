const express = require('express');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const port = 3000;

// Middleware untuk parsing body request dalam format JSON
app.use(express.json());

// Menggunakan foodRoutes sebagai middleware untuk rute "/api"
app.use('/api', foodRoutes);

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});