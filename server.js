const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection');
const booksRouter = require('./routes/books');

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

/* Add routes here */
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})


app.use('/api/books', booksRouter);