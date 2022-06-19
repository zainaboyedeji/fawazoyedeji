import {useEffect} from "react";
import './App.scss';
import MainView from './Pages/MainView/index';
import ReactGA from 'react-ga';
import { BrowserRouter } from "react-router-dom";

const TRACKING_ID = "G-TVH8XXJ6F1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
       <MainView/>
     </BrowserRouter>
    </div>
  );
}

export default App;
