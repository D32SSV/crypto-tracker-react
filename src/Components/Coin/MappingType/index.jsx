import "./styles.css";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function MappingType({mapType, handleMapTypeChange}) {
 

  return (
    <div className="toggleMapping">
      <ToggleButtonGroup
        value={mapType}
        exclusive
        onChange={handleMapTypeChange}
        sx={{
          "& .Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
          },
        }}
      >
        <ToggleButton value="prices" className="toggleButton">Price</ToggleButton>
        <ToggleButton value="market_caps" className="toggleButton">Market Cap</ToggleButton>
        <ToggleButton value="total_volumes" className="toggleButton">Total Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
