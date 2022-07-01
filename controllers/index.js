// collecting packaged group of API endpoints and prefixing them with path '/api'
// also to future-proof the folders
const router = require('express').Router();
// routes to api folder for organization sake
const apiRoutes = require('./api/');
// route to home-routes in controller directory
const homeRoutes = require('./home-routes.js');
//route to dashboard-routes in controller directory
const dashboardRoutes = require('./dashboard-routes.js');

const createpostRoutes = require('./createpost-routes.js')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/createpost', createpostRoutes);

// if we make a request to any endpoint that doesn't exist, we'll receive 404 error indicating we have requested an incorrect resource
// router.use((req, res) => {
//     res.status(404).end();
// });

module.exports = router;