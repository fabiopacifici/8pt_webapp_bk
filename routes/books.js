const Router = require('express').Router();
const bookController = require('../controllers/bookController');
const upload = require('../middleware/fileUpload');
// Index route
Router.get('/', bookController.index)

// Show route
Router.get('/:id', bookController.show)


Router.post('/', upload.single('cover_image') ,bookController.store)


// Store Review
Router.post('/:id/reviews', bookController.storeReviews)

module.exports = Router;