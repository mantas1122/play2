import { Card, CardTitle, CardBody, CardText, CardImg } from "reactstrap";

class Prices extends React.Component {
  render() {
    var cardList = this.props.bpi.items.map(function(item) {
      return (
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{item.snippet.title}</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      );
    });

    return <div>{cardList}</div>;
  }
}

export default Prices;
