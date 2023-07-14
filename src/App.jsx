import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import City from "./components/City";

function App() {
  const key = "60e7308967ddd70519f33b65ec86a21f";

  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search]);

  console.log(search);

  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />

        {city && <City city={city} />}
      </div>
    </div>
  );
}

export default App;
