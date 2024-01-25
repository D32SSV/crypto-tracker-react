import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../Grid";
import "./styles.css";
import List from "../List";

export default function LabTabs({ coins }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: { main: "#39FF14" },
    },
  });

  const style = { color: "white" };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, id) => {
              return <Grid coin={coin} key={id} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="table"> 
            {coins.map((coin, id) => {
              return <List coin={coin} key={id} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
