import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import BookCard from "../components/Card";
import SearchBar from "../components/Search";
import API from "../utils/API";

function BookSearch() {
  const [books, setBooks] = useState([{}]);
  const [search, setSearch] = useState();
  console.log(books, "is this from books?");

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    API.search(search).then((res) => {
      console.log(res.data.items);
      let data = res.data.items;
      const bookData = data.map((book) => ({
        link: book.volumeInfo.infoLink,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || "",
        id: book.id,
      }));
      setBooks(bookData);
    });
  };

const saveBooks = (books) => {
  API.
}

  return (
    <>
      <SearchBar input={handleInputChange} submit={handleSubmit} />
      <Container>
        {books.map((book) => {
          return (
            <BookCard
              image={book.image}
              title={book.title}
              description={book.description}
              link={book.link}
              cat="Link"
              id={book.id}
              name="Save"
            />
          );
        })}
      </Container>
    </>
  );
}

export default BookSearch;
