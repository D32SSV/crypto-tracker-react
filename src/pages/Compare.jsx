import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import SelectCoins from "../Components/Compare/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays";
import { coinObject } from "../functions/coinObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import Loader from "../Components/Common/Loader";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../Components/Coin/LineChart";
import MappingType from "../Components/Coin/MappingType";

function Compare() {
  const [days, setDays] = useState(30);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [mapType, setMapType] = useState("prices");
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function handleDaysChange(e) {
    setIsLoading(true);
    setDays(e.target.value);
    const prices1 = await getCoinPrices(crypto1, e.target.value, mapType);
    const prices2 = await getCoinPrices(crypto2, e.target.value, mapType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handleMapTypeChange = async (event, newMapType) => {
    setIsLoading(true);
    setMapType(newMapType);
    const prices1 = await getCoinPrices(crypto1, days, newMapType);
    const prices2 = await getCoinPrices(crypto2, days, newMapType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const getData = async () => {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);

    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, mapType);
        const prices2 = await getCoinPrices(crypto2, days, mapType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, mapType);
      const prices2 = await getCoinPrices(crypto2, days, mapType);
      if (prices1.length > 0 && prices2.length > 0) {
        //
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="innerDivComparePage">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
            />
          </div>
          <div className="coin_wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="coin_wrapper">
            <List coin={crypto2Data} />
          </div>
          <div className="coin_wrapper">
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
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
}

export default Compare;
