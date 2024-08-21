import React, { Component } from "react";
import { Row, Form, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
    selectedGenre: "all", // Stato per il genere selezionato
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleGenreChange = (e) => {
    this.setState({ selectedGenre: e.target.value });
  };

  //voglio filtrare i libri basandomi su gener e titolo
  filterBooks = () => {
    const { search, selectedGenre } = this.state;
    const { books } = this.props;

    return books.filter(
      (book) =>
        (book.title.includes(search) && selectedGenre === "all") ||
        book.category === selectedGenre
    );
  };

  render() {
    const filteredBooks = this.filterBooks();
    
    return (
      <Container className="my-5">
        <Form.Group>
          <Form.Select
            value={this.state.selectedGenre}
            onChange={this.handleGenreChange}
          >
            <option value="all">All Genres</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="scifi">Sci-Fi</option>
            <option value="history">History</option>
            <option value="romance">Romance</option>
          </Form.Select>

          <Form.Control
            type="text"
            placeholder="Search books"
            value={this.state.search}
            onChange={this.handleSearchChange}
            className="mt-3"
          />
        </Form.Group>
        <Row className="mt-5 g-4">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} theBook={book} />
        ))}
      </Row>
      </Container>
    );
  }
}

export default BookList;
