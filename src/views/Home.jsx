import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Nav from "../components/Nav/Nav";
import DisplayCards from "../components/Cards/Cards";
//import { useGetAllQuery } from "../redux/apiSlice";
import { useState } from "react";

const Home = (props) => {
  //const { data, isLoading, isError } = useGetAllQuery();
  //const [games, setGames] = useState([]);

console.log(props);
  const navegacion = useNavigate();

  // if (isLoading) return <h1>Loading...</h1>;
  // if (isError) return <h1>Error</h1>;

  const apiKey = '413179f7b37044a3b53b63db111fda8c'; 
  const apiURL = 'https://api.rawg.io/api/games';


  const onSearch = async (name) => {
    
  }


  return (
    <div className={styles.Home}>
      <Nav  onSearch={onSearch}/>
      <button
        onClick={() => {
          navegacion("/form");
        }}
      >
        Create new videogame
      </button>
       <DisplayCards games={props.games} />
    </div>
  );
};

export default Home;
