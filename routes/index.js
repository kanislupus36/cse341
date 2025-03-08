const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.kanisRoute);
routes.get('/rufus', lesson1Controller.rufusRoute);

module.exports = routes;