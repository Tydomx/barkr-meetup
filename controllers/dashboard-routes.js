const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Owner, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
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
    ],
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ['id', 'comment_text', 'post_id', 'owner_id', 'created_at'],
    //     include: {
    //       model: Owner,
    //       attributes: ['user_name']
    //     }
    //   },
    //   {
    //     model: Post,
    //     attributes: ['title']
    //   }
    // ]
  })
    .then(dbPostData => {
      // serialize data before passing to template
      // const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(dbPostData);
      const owner = dbPostData.get({ plain: true });
      res.render('dashboard', { owner, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get route for editing post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'post_content',
      // 'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'owner_id', 'created_at'],
        include: {
          model: Owner,
          attributes: ['username']
        }
      },
      {
        model: Owner,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;