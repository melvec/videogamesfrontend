import { useNavigate } from "react-router-dom";

//import characters, { Rick } from '../data.js';

const Landing = () => {
  const navegacion = useNavigate();

  return (
    <div>
      <div>Welcome to the Videogames world</div>
      <div>
        <button
          onClick={() => {
            navegacion("/home");
          }}
        >
          Welcome to the Videogame cards app!
        </button>
      </div>
    </div>
  );
};

export default Landing;
