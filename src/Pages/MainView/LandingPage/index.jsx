import * as React from "react";
import one from "../../../image/1home/001.jpg";
import two from "../../../image/1home/002.jpg";
import three from "../../../image/1home/003.jpg";
import four from "../../../image/1home/004.jpg";
import five from "../../../image/1home/005.jpg";
import six from "../../../image/1home/006.jpg";
import seven from "../../../image/1home/007.jpg";
import eight from "../../../image/1home/008.jpg";
import nine from "../../../image/1home/009.jpg";
import ten from "../../../image/1home/010.jpg";
import eleven from "../../../image/1home/011.jpg";
import twelve from "../../../image/1home/012.jpg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./landingpage.scss";

function LandingPage() {
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
      <div class="textwhite"><Link to="/yours-in-arm">yours in arm</Link></div>
    </Box>
  );

  return (
    <div className="land">
      <div className="d-flex min-land">
        <h1 className="logo long-text">
          <Link to="/">
            FAWAZ  OYEDEJI.
          </Link>
        </h1>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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

      <div className="allImg">
        <img src={one} alt="One" />
      </div>
      <div className="allImg">
        <img src={two} alt="Two" />
      </div>
      <div className="allImg">
        <img src={three} alt="Three" />
      </div>
      <div className="allImg">
        <img src={four} alt="Four" />
      </div>
      <div className="allImg">
        <img src={five} alt="Five" />
      </div>
      <div className="allImg">
        <img src={six} alt="Six" />
      </div>
      <div className="allImg">
        <img src={seven} alt="Seven" />
      </div>
      <div className="allImg">
        <img src={eight} alt="Eight" />
      </div>
      <div className="allImg">
        <img src={nine} alt="Nine" />
      </div>
      <div className="allImg">
        <img src={ten} alt="Ten" />
      </div>
      <div className="allImg">
        <img src={eleven} alt="Eleven" />
      </div>
      <div className="allImg">
        <img src={twelve} alt="Twelve" />
      </div>
    </div>
  );
}

export default LandingPage;
