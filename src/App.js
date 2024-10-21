import {useEffect} from "react";
import './App.scss';
import MainView from './pages/index';
import ReactGA from 'react-ga4';
import { BrowserRouter } from "react-router-dom";

const TRACKING_ID = "G-TVH8XXJ6F1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send(window.location.pathname + window.location.search);
  }, []); 

  useEffect(() => {
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
      img.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      img.addEventListener('dragstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
    });

    // Clean up event listeners when component unmounts
    return () => {
      images.forEach((img) => {
        img.removeEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        img.removeEventListener('contextmenu', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
        img.removeEventListener('dragstart', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      });
    };
  }, []);

//   useEffect(() => {
//     const handleContextmenu = e => {
//         e.preventDefault()
//     }
//     document.addEventListener('contextmenu', handleContextmenu)
//     return function cleanup() {
//         document.removeEventListener('contextmenu', handleContextmenu)
//     }
// }, [])

  return (
    <div className="App">
      <BrowserRouter>
       <MainView/>
     </BrowserRouter>
    </div>
  );
}

export default App;
