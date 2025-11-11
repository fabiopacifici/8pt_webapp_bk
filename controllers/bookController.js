const connection = require('../database/connection');


/**
 * Get all books
 */
function index(req, res) {

  const sql = 'SELECT * FROM books';

  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    console.log(results);

    res.json({ books: results });
  });
}



/**
 *  Get a single book by ID, including its reviews
 */
function show(req, res) {

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
      if (reviewsErr) return res.status(500).json({ error: reviewsErr.message });

      const thisBook = { ...results[0], reviews: reviewsResults };

      res.json(thisBook);

    })


  })
}


function store(req, res){

  // request body has only text fields
  console.log(req.file, req.body);
  const cover_image = 'http://localhost:3000/uploads/' + req.file.originalname
  const {title, author, abstract} = req.body;
  console.log(title, author, abstract, cover_image);

  const sql = 'INSERT INTO books (title, author, abstract, cover_image) VALUES (?, ?, ?, ?)';
  
  connection.query(sql, [title, author, abstract, cover_image], (err, results)=>{
    if(err) return res.status(500).json({ error: err.message});
    console.log(results);
    res.status(201).json({ message: 'Book created', id: results.insertId });
  })


}



module.exports = {
  index,
  show,
  store
}