const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Owner, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
        where: {
            // use the ID from the session
            owner_id: req.session.owner_id
        },
        attributes: [
            'id',
            'post_content',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post_id = vote.post_id)'), 'vote_count']
        ],
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
                attributes: ['user_name', 'owner_name']
            }
        ]
    })
        .then(dbPostData => {
            // serialize data before passing to template
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('create-post', { posts, loggedIn: true });
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
            'created_at',
            'title',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
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