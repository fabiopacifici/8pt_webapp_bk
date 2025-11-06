const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection');
const booksRouter = require('./routes/books');
const notFound = require('./middleware/notFound');
const serverError = require('./middleware/serverError');

// we need the static assets for the (bonus) image upload feature
app.use(express.static('public'));
// middleware to parse JSON bodies for the reviews submission feature
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

/* Add routes here */
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})

// Middleware for books routes
app.use('/api/books', booksRouter);


// Middleware Handle Server Errors
app.use(serverError);

// Middleware Handle 404 errors
app.use(notFound);