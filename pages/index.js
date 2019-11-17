import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Prices from "../components/Prices";
import data1 from "../samples/channelVids.json";

const Index = props => (
  <Layout>
    <div>
      <h1>Dev Talks</h1>
      <p>best by week | 1 month | 3 month | 6 month | 1 year | 3 year | 6 year
      </p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  // const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  /*const dkey = "AIzaSyCgYKXEBHLkcp5K3ep2Ue9G4GJHWerThVQ";
  const channelId = "UCCBVCTuk6uJrN3iFV_3vurg";
  const res = await fetch(
    "https://www.googleapis.com/youtube/v3/search?" +
      "key=" +
      dkey +
      "&channelId=" +
      channelId +
      "&part=snippet,id&order=date&maxResults=20"
  );*/
  // const res = await fetch('../samples/channelVids.json');

  //const data = await res.json();

  return {
    bpi: data1
  };
};

export default Index;
