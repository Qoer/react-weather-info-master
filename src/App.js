import { useState } from "react";
import { Home } from "./pages/Home/Home";
import { Header } from "./shared/Header/Header";
import { Popup } from "./shared/Popup/Popup";

function App() {
  const [city, setCity] = useState({ q: "Москва" });
  const [click, setClick] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [cardInfo, setCardInfo] = useState(null);
  return (
    <div className="global-container">
      {forecast !== null && cardInfo !== null && (
        <Popup
          click={click}
          setClick={setClick}
          forecast={forecast}
          city={city}
          cardInfo={cardInfo}
        />
      )}
      <div className="container">
        <Header setCity={setCity} />
        <Home
          city={city}
          setClick={setClick}
          forecast={forecast}
          setForecast={setForecast}
          setCardInfo={setCardInfo}
        />
      </div>
    </div>
  );
}

export default App;
