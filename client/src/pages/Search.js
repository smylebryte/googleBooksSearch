import React, { useState } from "react";
import BookCard from "../components/Card";
import SearchBar from "../components/Search";
import API from "../utils/API";

function BookSearch() {
  const [books, setBooks] = useState({});
  const [search, setSearch] = useState();

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    API.search(search).then((res) => {
      console.log(res.data.items);
      let data = res.data.items;
      setBooks(data);
      console.log(books);
      data.map((book) => {
        book = {
          image: book.volumeInfo.imageLinks.thumbnail,
          title: book.volumeInfo.title,
          description: book.volumeInfo.description,
          link: book.volumeInfo.infoLink,
        };
        console.log(book, "add to props");
      });
    });
  };

  return (
    <>
      <SearchBar input={handleInputChange} submit={handleSubmit} />
      <BookCard result={books} />;
    </>
  );
}

export default BookSearch;
