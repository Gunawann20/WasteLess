const User = require('../models/User');
const bcrypt = require('bcrypt');

// Endpoint /login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari pengguna berdasarkan email
    const user = await User.findOne({ email });

    // Jika pengguna tidak ditemukan
    if (!user) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // Jika password tidak valid
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    // Berhasil login
    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
};

// Endpoint /register
const register = async (req, res) => {
  const { name, gender, address, email, password, photo } = req.body;

  try {
    // Cek apakah email sudah terdaftar
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat objek user baru
    const newUser = new User({
      name,
      gender,
      address,
      email,
      password: hashedPassword,
      photo,
    });

    // Simpan user baru ke database
    await newUser.save();

    return res.status(201).json({ message: 'Registration successful' });

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  login,
  register,
};
