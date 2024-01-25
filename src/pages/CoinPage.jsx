import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [coinData, setCoinData] = React.useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log(response);
          //   setCoins(response.data);
          //   setPaginatedCoins(response.data.slice(0, 10));
          coinObject(setCoinData, response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [id]);
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin_wrapper">
            <List coin={coinData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
