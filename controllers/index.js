// collecting packaged group of API endpoints and prefixing them with path '/api'
// also to future-proof the folders

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//route to dashboard-routes in controller directory
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

// route to home-routes in controller directory
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

// if we make a request to any endpoint that doesn't exist, we'll receive 404 error indicating we have requested an incorrect resource
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;