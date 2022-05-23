const router = require('express').Router();
const userRoute = require('./user.route');
const authRoute = require('./auth.route');



const defaultRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;