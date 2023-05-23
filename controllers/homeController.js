const home = (req, res) => {
    const name = req.session.user.name;
    return res.send(`Selamat datang ${name}`);
  };
  
  module.exports = {
    home,
  };
  