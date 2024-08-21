import React, { Component } from "react";
import { Row,  Form, Container } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  handleSearch = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { books = [] } = this.props;

    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <Container className="my-5">
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="Search books"
            value={this.state.searchQuery}
            onChange={this.handleSearch}
          />
        </Form.Group>
        <Row>
          {filteredBooks.map((book) => (
            <SingleBook key={book.asin} theBook={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
