import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MobileNav from "../mobile_nav";
import {IoReorderThreeSharp} from "react-icons/io5";
import "./mobile_head.scss";

function MobileHead() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, background: "#242424", height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <MobileNav/>
    </Box>
  );

  return (
  
      <div className="min-land">
       <div className="inner">
       <h1 className="logo long-text">
          <Link to="/">
            FAWAZ  OYEDEJI.
          </Link>
        </h1>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><IoReorderThreeSharp/></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
         </div>
      </div>
  );
}

export default MobileHead;
