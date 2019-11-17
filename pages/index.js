import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Prices from "../components/Prices";

const Index = props => (
  <Layout>
    <div>
      <h1>Welcome to BitzPrice ddd</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  // const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const dkey = "AIzaSyCgYKXEBHLkcp5K3ep2Ue9G4GJHWerThVQ";
  const channelId = "UCCBVCTuk6uJrN3iFV_3vurg";
  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/search?" +
      "key=" +
      dkey +
      "&channelId=" +
      channelId +
      "&part=snippet,id&order=date&maxResults=20"
  );
  const data = await res.json();

  return {
    bpi: data
  };
};

export default Index;
