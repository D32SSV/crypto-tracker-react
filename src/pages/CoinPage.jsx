import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../Components/Coin/LineChart";
// import { convertedDate } from "../functions/convertDate";
import SelectDays from "../Components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import MappingType from "../Components/Coin/MappingType";
import { convertedDate } from "../functions/convertDate";

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [coinData, setCoinData] = React.useState();
  const [days, setDays] = React.useState(30);
  const [chartData, setChartData] = React.useState({});
  const [mapType, setMapType] = React.useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    // console.log("Coin DATA>>>>", data);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, mapType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, mapType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleMapTypeChange = async (event, newMapType) => {
    setIsLoading(true);
    setMapType(newMapType);
    const prices = await getCoinPrices(id, days, newMapType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
        // <label>Api failed</label>
      ) : (
        <>
          <div className="coin_wrapper">
            <List coin={coinData} />
          </div>
          <div className="coin_wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <MappingType
              mapType={mapType}
              handleMapTypeChange={handleMapTypeChange}
            />
            <LineChart
              chartData={chartData}
              mapType={mapType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
