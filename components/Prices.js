class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {this.props.bpi}</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default Prices;
