import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

export default function TemporaryDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer}>
        <MenuRoundedIcon  className="link"/>
      </IconButton>
      <Drawer anchor={"right"} open={openDrawer} onClose={toggleDrawer}>
        <div className="toggledDrawer">
          <a href="#">
            <p className="link">Home</p>
          </a>
          <a href="#">
            <p className="link">Compare</p>
          </a>
          <a href="#">
            <p className="link">Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
