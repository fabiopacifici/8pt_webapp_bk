const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection');

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})

/* Add routes here */
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the webapp backend!' });
})

app.get('/api/books', (req, res) => {


  const sql = 'SELECT * FROM books';

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(results);

    res.json({ books: results });
  });

})


app.get('/api/books/:id', (req, res) => {

  const sql = 'SELECT * FROM books WHERE id = ?';
  const reviewsSql = 'SELECT * FROM reviews WHERE book_id = ?';
  
  const bookId = Number(req.params.id);
  console.log(sql, bookId);

  connection.query(sql, [bookId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }

    connection.query(reviewsSql, [bookId], (reviewsErr, reviewsResults) => {
      if(reviewsErr) return res.status(500).json({ error: reviewsErr.message });


      const thisBook = { ...results[0], reviews: reviewsResults };

      res.json(thisBook);

    })


  })


})