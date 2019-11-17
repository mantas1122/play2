import { Card, CardTitle, CardBody, CardImg, CardDeck, Container} from "reactstrap";
import React, { Fragment } from 'react';

class Prices extends React.Component {
  render() {
    var cardList = this.props.bpi.items.map(function(item) {
      return (
      
        <Card style={{width:"300px"}}>
          <CardImg
            top
            src={item.snippet.thumbnails.default.url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{item.snippet.title}</CardTitle>
          </CardBody>
        </Card>
       
      );
    });

    return <Container fluid="true"><CardDeck>{cardList}</CardDeck></Container>;
  }
}

export default Prices;
