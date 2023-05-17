const connection = require('../config/database');

// Mendapatkan daftar makanan yang tersedia
const getAvailableFoodList = (callback) => {
  const query = 'SELECT * FROM food WHERE availability = true';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error dalam mengambil daftar makanan yang tersedia: ', error);
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAvailableFoodList
};