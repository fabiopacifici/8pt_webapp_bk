const Router = require('express').Router();
const bookController = require('../controllers/bookController');

// Index route
Router.get('/', bookController.index)

// Show route
Router.get('/:id', bookController.show)



module.exports = Router;