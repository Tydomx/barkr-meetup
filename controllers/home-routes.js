// using res.render for a response for which template to use
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/', (req, res) => {
    res.render('homepage', {
      id: 1,
      // do we need this if they are creating a post rather than linking it ?
      post_url: 'https://handlebarsjs.com/guide/',
      title: 'Handlebars Docs',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      owner: {
        user_name: 'test_user'
      }
    });
  });

module.exports = router;