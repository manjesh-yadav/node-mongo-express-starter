const router = require('express').Router();
const userRoute = require('./user.route');
const authRoute = require('./auth.route');
const clientRoute = require('./client.route');



const defaultRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/client',
    route: clientRoute,
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;