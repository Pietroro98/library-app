import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => (
  <Card className="h-100">
    <Card.Img variant="top" src={book.img} />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{book.title}</Card.Title>
      <Card.Text className="mt-auto">
        <p>€{book.price}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted fw-bold">{book.category}</small>
    </Card.Footer>
  </Card>
);

export default SingleBook;
