const mysql = require('mysql');

// Konfigurasi koneksi database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'food_donation'
});

// Membuka koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

module.exports = connection;