const authenticate = (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      res.status(401).json({ error: 'Silahkan login/register terlebih dahulu' });
    }
  };
  
  module.exports = authenticate;
  