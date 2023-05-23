const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const homeRoutes = require('./routes/homeRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 1 hari dalam milidetik
  },
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/api', authRoutes);
app.use('/api/home', homeRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Terjadi kesalahan server' });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
