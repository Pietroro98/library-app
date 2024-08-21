import React, { Component } from "react";
import { Row, Form, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  filterBooks = () => {
    const { search } = this.state;
    const { books } = this.props;

    return books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  render() {
    const filteredBooks = this.filterBooks();

    return (
      <Container className="my-5">
        <Form.Group>
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