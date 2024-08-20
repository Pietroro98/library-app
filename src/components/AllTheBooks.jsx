import { Row, Col, Card, } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import scifiBooks from "../data/scifi.json";
import horrorBooks from "../data/scifi.json";
import romanceBooks from "../data/romance.json";
import historyBooks from "../data/history.json";

const AllTheBooks = function () {
  const allBooks = fantasyBooks
    .concat(scifiBooks)
    .concat(horrorBooks)
    .concat(romanceBooks)
    .concat(historyBooks);

  return (
    <Row className="mt-5 g-4">
      {allBooks.map((book) => (
        <Col md={3} lg={2} key={book.asin} className="mb-4">
          <Card className="h-100">
            <Card.Img variant="top" src={book.img} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{book.title}</Card.Title>
              <Card.Text className="mt-auto">
                <p>€{book.price}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted fw-bold ">{book.category}</small>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
