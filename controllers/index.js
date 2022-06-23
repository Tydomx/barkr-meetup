// collecting packaged group of API endpoints and prefixing them with path '/api'
// also to future-proof the folders

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// if we make a request to any endpoint that doesn't exist, we'll receive 404 error indicating we have requested an incorrect resource
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;