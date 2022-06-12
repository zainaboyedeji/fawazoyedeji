import './App.scss';
import MainView from './Pages/MainView/index';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <MainView/>
     </BrowserRouter>
    </div>
  );
}

export default App;
