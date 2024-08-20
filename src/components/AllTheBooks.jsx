import { Row, Col, Card } from "react-bootstrap";
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
    <Row className="mt-4">
      {allBooks.map((book) => (
        <Col md={3} lg={2} key={book.asin} className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <p>CATEGORY: {book.category}</p>
                <p>€{book.price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AllTheBooks;
