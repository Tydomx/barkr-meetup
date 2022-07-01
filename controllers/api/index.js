const router = require('express').Router();

const ownerRoutes = require('./owner-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/owners', ownerRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;