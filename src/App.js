import { Link } from 'react-router-dom';
import './App.css';
import homePageImage from "./homePageImage.png";
import backgroundImage from "./background-wave.png";

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <div>
          <p id='BestOnlineStore'>BEST ONLINE STORE OF THE YEAR</p>
          <p id='WeAreFashion'>We don't do <br/> fashion, we are  <br/>fashion</p>
          <button id='ShopNowBtn'><Link to="/Products">Shop now </Link></button>
        </div>
        <img id='homePageImage' src={homePageImage} alt='homePageImage'/>
      </div>
      <img id ="backgroundImage" src={backgroundImage} alt="backgroundImage"/>
    </div>
  );
}

export default App;
