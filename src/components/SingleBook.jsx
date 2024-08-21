import React, { Component } from "react";
import { Card, Col, Container } from "react-bootstrap";

// class SingleBook extends Component {
//   state = {
//     selected: false,
//   };

//   render() {
//     return (
//       <Container>
//         <Col md={3} lg={2} key={this.props.theBook.asin}>
//           <Card className="h-100">
//             <Card.Img variant="top" src={this.props.theBook.img} />
//             <Card.Body className="d-flex flex-column">
//               <Card.Title>{this.props.theBook.title}</Card.Title>
//               <Card.Text className="mt-auto">
//                 <p>€{this.props.theBook.price}</p>
//               </Card.Text>
//             </Card.Body>
//             <Card.Footer>
//               <small className="text-muted fw-bold">{this.props.theBook.category}</small>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Container>
//     );
//   }
// }

// export default SingleBook;

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
    const { theBook } = this.props;
    const { selected } = this.state;

    return (
      <Container>
        <Col md={3} lg={2} key={theBook.asin}>
          <Card
            className={`h-100 ${selected ? "border border-danger" : ""}`}  // Aggiunge un bordo rosso se selezionato
            onClick={this.toggleSelected}  // Aggiunge il gestore di eventi per il click
          >
            <Card.Img variant="top" src={theBook.img} />
            <Card.Body className="d-flex flex-column">
              <Card.Title>{theBook.title}</Card.Title>
              <Card.Text className="mt-auto">
                <p>€{theBook.price}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted fw-bold">{theBook.category}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Container>
    );
  }
}

export default SingleBook;
