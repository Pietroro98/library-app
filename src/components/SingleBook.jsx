import React, { Component } from "react";
import { Card, Col, Container } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Container>
        <Col md={3} lg={2} key={this.props.theBook.asin}>
          <Card
            className="h-100"
            onClick={this.toggleSelected}
            style={{
              border: this.state.selected
                ? "5px solid red"
                : "1px solid #dee2e6",
            }}
          >
            <Card.Img variant="top" src={this.props.theBook.img} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{this.props.theBook.title}</Card.Title>
              <Card.Text className="mt-auto">
                <p>€{this.props.theBook.price}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted fw-bold">
                {this.props.theBook.category}
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default SingleBook;
