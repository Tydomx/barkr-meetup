// using res.render for a response for which template to use
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;