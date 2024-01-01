import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { useEffect, useState } from "react";
import axios from 'axios'

const apiKey = '413179f7b37044a3b53b63db111fda8c'; 
const apiURL = 'https://api.rawg.io/api/games';

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {

    
    async function fetchGames() {
      try {
        const response = await axios.get(apiURL, {
          params: {
            key: apiKey,
            page_size: 100,
          },
        });

        const gamesData = response.data.results.map((game) => ({
          id: game.id,
          image: game.background_image,
          name: game.name,

        }));

        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }

    fetchGames();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home games={games}/>} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
}

export default App;
