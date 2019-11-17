import { Card, CardTitle, CardBody, CardText } from "reactstrap"; 

class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi.kind}</li>
        </ul>
        <br />
      </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default Prices;
