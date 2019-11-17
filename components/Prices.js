import { Card, CardTitle, CardBody, CardImg, CardDeck, Container} from "reactstrap";

class Prices extends React.Component {
  render() {
    var cardList = this.props.bpi.items.map(function(item) {
      return (
        <Card className='mb-4'>
          <CardImg
            top
            width="20px"
            src={item.snippet.thumbnails.default.url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{item.snippet.title}</CardTitle>
          </CardBody>
        </Card>
      );
    });

    return <div><Container fluid="true"><CardDeck>{cardList}</CardDeck></Container></div>;
  }
}

export default Prices;
