// using res.render for a response for which template to use
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Owner, Comment } = require('../models');

//render homepage 
router.get('/', (req, res) => {
  res.render('homepage');
});

//render login page
router.get('/login', (req, res) => {
  res.render('login');
});

// to populate all posts on hompage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: Owner,
          attributes: ['user_name']
        }
      },
      {
        model: User,
        attributes: ['user_name']
      }
    ]
  })
    .then(dbPostData => {
      //it will loop over and map sequalize object to produce new posts array
      const posts = dbPostData.map(post => post.get({ plain: true }));
      // pass a single post object into the homepage template
      console.log(dbPostData[0]);
      res.render('homepage',{posts});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



module.exports = router;