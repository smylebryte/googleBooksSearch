const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  book_id: {
    type: String,
  },
  title: {
    type: String,
  },
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
