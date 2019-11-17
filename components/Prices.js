import { Card, CardTitle, CardBody, CardText, CardImg } from "reactstrap";

class Prices extends React.Component {
  render() {
    return (
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.bpi.kind}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    );
  }
}

export default Prices;
