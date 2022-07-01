const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Owner, Comment, Vote } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts from one user
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: ['id', 'post_content', 'title', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
    // order is putting the posts in order in descending order
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'owner_id', 'created_at'],
        include: {
          model: Owner,
          attributes: ['user_name']
        }
      },
      {
        model: Owner,
        attributes: ['user_name']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single owner post
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'post_content', 'title', 'created_at', [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'owner_id', 'created_at'],
        include: {
          model: Owner,
          attributes: ['user_name']
        }
      },
      {
        model: Owner,
        attributes: ['user_name']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// POST route user can create posts
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_content: req.body.post_content,
    owner_id: req.session.owner_id
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/posts/upvote
router.put('/upvote', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upvote({ ...req.body, owner_id: req.session.owner_id }, { Vote, Comment, Owner })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;