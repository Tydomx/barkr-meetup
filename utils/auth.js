const withAuth = (req, res, next) => {
    if (!req.session.owner_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;