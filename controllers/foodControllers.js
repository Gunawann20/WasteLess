const Food = require('../models/Food');

// Endpoint /food
const getAllFood = async (req, res) => {
  try {
    // Dapatkan semua makanan dari database
    const foods = await Food.find();

    return res.status(200).json(foods);

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
};

// Endpoint /food/:id
const getFoodById = async (req, res) => {
  const { id } = req.params;

  try {
    // Cari makanan berdasarkan ID
    const food = await Food.findById(id);

    // Jika makanan tidak ditemukan
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    return res.status(200).json(food);

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
};

// Endpoint /food (POST)
const createFood = async (req, res) => {
  const { name, description } = req.body;

  try {
    // Buat objek makanan baru
    const newFood = new Food({
      name,
      description,
    });

    // Simpan makanan baru ke database
    await newFood.save();

    return res.status(201).json({ message: 'Food created successfully' });

  } catch (error) {
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  getAllFood,
  getFoodById,
  createFood,
};
