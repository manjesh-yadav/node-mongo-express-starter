const router = require('express').Router();
const postRoute = require('./post.route');
const docsRoute = require('./docs.route');



const defaultRoutes = [
  {
    path: '/post',
    route: postRoute,
  },
  {
    path: '/docs',
    route: docsRoute,
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;