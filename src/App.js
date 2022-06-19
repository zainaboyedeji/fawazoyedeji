import './App.scss';
import MainView from './Pages/MainView/index';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

const TRACKING_ID = "G-TVH8XXJ6F1"git ; // OUR_TRACKING_ID
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
