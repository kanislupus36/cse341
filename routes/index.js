const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.use('/', require('./swagger'));

routes.get('/', lesson1Controller.kanisRoute);
routes.get('/rufus', lesson1Controller.rufusRoute);
routes.use('/', require('./contacts'));

module.exports = routes;