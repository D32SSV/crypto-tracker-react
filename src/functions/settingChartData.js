import { convertedDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1.map((price) => convertedDate(price[0])),
      datasets: [
        {
          label: "Crypto1",
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          // backgroundColor: "rgba(58, 128, 233,0.3)",
          borderWidth: 1.25,
          fill: false,
          tension: 0.25,
          pointRadius: 1,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto2",
          data: prices2.map((price) => price[1]),
          borderColor: "#61c96f",
          // backgroundColor: "rgba(58, 128, 233,0.3)",
          borderWidth: 1.25,
          fill: false,
          tension: 0.25,
          pointRadius: 1,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1.map((price) => convertedDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderColor: "#3a80e9",
          backgroundColor: "rgba(58, 128, 233,0.3)",
          borderWidth: 1.25,
          fill: true,
          tension: 0.25,
          pointRadius: 1,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
