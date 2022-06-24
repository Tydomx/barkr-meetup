const router = require('express').Router();

const ownerRoutes = require('./owner-routes');
const postRoutes = require('./post-routes');

router.use('/owners', ownerRoutes);
router.use('/posts', postRoutes);

module.exports = router;