const Food = require('../models/foodModel');

// Menampilkan daftar makanan yang tersedia
const getAvailableFoodList = (req, res) => {
  Food.getAvailableFoodList((error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Gagal mengambil daftar makanan yang tersedia' });
    }

    return res.json(results);
  });
};

module.exports = {
  getAvailableFoodList
};