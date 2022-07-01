const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Owner, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Owner.findOne({
    where: {
      // use the ID from the session
      id: req.session.owner_id
    },
    attributes: [
      'id',
      'user_name',
      'owner_name',
      'dog_name',
      'dog_breed',
      'dog_size',
      'dog_description',
      'email'
    ]
  })
    .then(dbOwnerData => {
      // serialize data before passing to template
      // const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(dbOwnerData);
      const owner = dbOwnerData.get({ plain: true });
      res.render('dashboard', { owner, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;